pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&                   
                    apt update && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y &&
                    apt install tee -y  &&  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -  &&      
                    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list &&                               
                    apt install nodejs -y && apt install npm -y  &&    apt install yarn -y &&   apt update && apt install yarn &&                          

                    yarn add package.json && yarn build

                '''
            }
        }
        stage('Test build directory exists') {
            steps {
               sh '''
                 pwd
                 ls -lrth .
               '''
            }
        }
        stage('Merge Dev Branch with Main Branch ') {
            steps {
                 sh '''
                 git checkout main & git  git merge origin/dev;             
                 echo "good for the moment"
                 
               '''
            }
        }
    }
}