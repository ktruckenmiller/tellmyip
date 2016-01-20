TELL ME MY IP

To install this script, type:

`npm install`

This will install the proper dependencies.

Then you have to run the script with `node ip.js`

That should be it

If you want to set it up with a cronjob to run when your computer reboots, figure
out where node is running by typing `which node`.

this should be $file_path in the following crontab line below.

Then use that file path and insert it into the crontab.

Open the crontab by typing
`crontab -e`

`@reboot /bin/sleep 60; $file_path /home/yourpath/tellmeip/ip.js &`

The $file_path should be the path to your node directory, and the /home/yourpath
should be the path to your node file.
