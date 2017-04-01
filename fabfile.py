from fabric.api import *

import time
import os

def setup():
    sudo("apt-get -q update")
    sudo("apt-get -q -y install build-essential")
    sudo("apt-get -q -y install python-pip")
    sudo("apt-get -q -y install python-dev")
    sudo("apt-get -q -y install libssl-dev")
    sudo("apt-get -q -y install libxml2-dev")
    sudo("apt-get -q -y install libxslt1-dev")
    sudo("apt-get -q -y install libmariadbclient-dev")
    sudo("apt-get -q -y install libjpeg-dev")  # For Thumbor
    sudo("apt-get -q -y install libffi-dev")  # For pyOpenSSL
    sudo("apt-get -q -y install nginx")
    sudo("apt-get -q -y install sshpass")

def restart():
    local("./bin/server.sh restart")
