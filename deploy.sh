#!/bin/sh
rsync -rvz --progress -e 'ssh -p 57018' ./public/* andrew@let-them.cyou:/srv/www/lt/hazen
