TELL ME MY IP

To install this script, type:

`npm install`

This will install the proper dependencies.

Then you have to run the script with `node ip.js`

Make a file called `.env` that has your AWS_ID, AWS_SECRET, and AWS_REGION in it for the SES mailer. You can also configure nodemailer to use gmail, or whatever mail configuration you'd like.

That should be it

If you want to set it up with a cronjob to run when your computer reboots, figure
out where node is running by typing `which node`.

this should be $file_path in the following crontab line below.

Then use that file path and insert it into the crontab.

Open the crontab by typing
`crontab -e`

`@reboot /bin/sleep 60; $file_path /home/yourpath/tellmyip/ip.js &`

The $file_path should be the path to your node directory, and the /home/yourpath
should be the path to your node file.
