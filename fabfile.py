from fabric.api import *

import time
import os

def restart():
    local("./bin/server.sh restart")
