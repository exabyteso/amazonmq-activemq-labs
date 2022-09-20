# Add deadsnakes repository with Python 3.9
sudo add-apt-repository ppa:deadsnakes/ppa

# Update repositories
sudo apt-get update

# Upgrade packages
sudo apt upgrade - y

# Install Python 3.9
sudo apt install python3.9 -y

# Add Python 3.6 & Python 3.9 to update-alternatives
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 1

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.9 2

# Set python 3.9 as the default version
sudo update-alternatives --set python /usr/bin/python3.9

# Ensure dist-utils is installed for Python3.9
# https://askubuntu.com/questions/1292972/importerror-cannot-import-name-sysconfig-from-distutils-usr-lib-python3-9

sudo apt install python3.9-distutils -y

# Ensure that the creation of virtual environments works
sudo apt install python3.9-venv -y

# Update pip
pip3 install --upgrade pip

# Update setuptools
pip3 install --upgrade setuptools

# Gradle setup

# Install SDKMAN package manager
curl -s "https://get.sdkman.io" | bash

source "$HOME/.sdkman/bin/sdkman-init.sh"

sdk install gradle 7.5.1









# Gradle setup
# # Used https://linuxize.com/post/how-to-install-gradle-on-ubuntu-18-04/ as a guide
# # Download gradle
# wget https://services.gradle.org/distributions/gradle-7.5.1-bin.zip -P /tmp

# #Unzip the downloaded file
# sudo unzip -d /opt/gradle /tmp/gradle-*.zip

# # Create file /etc/profile.d/gradle.sh 
# sudo touch /etc/profile.d/gradle.sh 

# # https://askubuntu.com/questions/103643/cannot-echo-hello-x-txt-even-with-sudo
# sudo bash -c 'echo "export GRADLE_HOME=/opt/gradle/gradle-7.5.1/
# export PATH=${GRADLE_HOME}/bin:${PATH}" > /etc/profile.d/gradle.sh'

# # Make the script executable by issuing the following chmod command:
# sudo chmod +x /etc/profile.d/gradle.sh

# # Load the environment variables using the source command
# source /etc/profile.d/gradle.sh