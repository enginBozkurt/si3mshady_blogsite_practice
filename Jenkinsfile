pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&   
                    apt upgrade -y && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli 
                    && apt install npm -y  &&   
                    apt install wget -y; 
                    
                    wget https://nodejs.org/dist/latest-v8.x/node-v8.17.0-linux-arm64.tar.gz;
                    tar -xzf node-v8.17.0-linux-arm64.tar.gz -C /usr/local;
                    node --version ;                                
                    npm i package.json;                
                '''
            }
        }
        stage('Test Npm build command succeeds') {
            steps {
               sh '''

                npm build && sleep 20 && ls .
                
               '''
            }
        }
        stage('Merge Dev Branch with Main Branch ') {
            steps {
                 sh '''
                 git checkout main & git merge origin/dev;                 
                     
               '''
            }
        }
    }
}