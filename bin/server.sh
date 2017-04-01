#!/bin/bash

SHAREDPATH="/home/jacob/projects/erakis/shared"

if [ -d "/home/jacob/projects/erakis" ]; then
  SCRIPTPATH="/home/jacob/projects/erakis/bin"
else
  SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -L )"
fi

function start {
  if [ -d "$SHAREDPATH" ]; then
    cd $SCRIPTPATH/..
    nohup uwsgi --socket 127.0.0.1:8000 --wsgi-file erakis/wsgi.py --chdir $SCRIPTPATH/.. --master --processes 8 --threads 8 --thunder-lock --pidfile $SHAREDPATH/uwsgi.pid --daemonize $SHAREDPATH/uwsgi.log > $SHAREDPATH/uwsgi.nohup &
  else
    pip install -r requirements.txt
    python manage.py migrate
    RUN_ENVIRONMENT=development python $SCRIPTPATH/../manage.py runserver 0.0.0.0:8000 &
  fi
}

function stop {
  if [ -f "$SHAREDPATH/uwsgi.pid" ]; then
    ID=`cat $SHAREDPATH/uwsgi.pid`
    kill -QUIT $ID

    LOOP=0
    PIDS=`ps axu|awk '{print $2}'|grep $ID|xargs`
    if [ -z "$PIDS" ]; then
      echo 'No running django server.'
    else
      echo "Kill django $PIDS"
      kill $PIDS
      sleep 1
    fi
    while test "$PIDS"; do
      # Code to kill process
      echo "$LOOP Terminating... $PIDS"
      PIDS=`ps axu|awk '{print $2}'|grep $ID|xargs`
      sleep 1
      LOOP=`expr $LOOP + 1`
      if [ $LOOP -ge 60 ]; then
          echo "Timeout. Kill $PIDS."
          kill $PIDS > /dev/null 2>&1
          break
      fi
    done
  else
    PIDS=`ps axu|grep ':9100'|grep -v grep|awk '{print $2}'|xargs`

    if [ -z "$PIDS" ]; then
      echo 'No running django server.'
    else
      echo "Kill django $PIDS"
      kill $PIDS
      sleep 1
    fi
  fi
}

function reload {
  if [ -f "$SHAREDPATH/uwsgi.pid" ]; then
    kill -HUP `cat $SHAREDPATH/uwsgi.pid`
    if [ $? -ne 0 ]; then
      echo 'No running server.'
      stop
      start
    fi
  else
    stop
    start
  fi
}

case $1 in
  dev)
    dev
    ;;
  start)
    start
    ;;
  stop)
    stop
    ;;
  restart)
    stop
    start
    ;;
  reload)
    reload
    ;;
  *)
    echo $"Usage: $0 {start|dev|stop|reload}"
    ;;
esac
