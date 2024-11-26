yarn build
Compress-Archive -Path dist/* -DestinationPath dist.zip -Force
scp dist.zip bitrealms:/data/web/bitrealms.ai/
ssh bitrealms "cd /data/web/bitrealms.ai/ && unzip -o dist.zip"
