pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1";  
                    apt upgrade -y && apt install git -y && apt install make -y;
                    apt install python3-pip -y &&  pip3 install awscli;                    
                    apt install npm -y && npm install -g npm@5.10.0 && 
                    npm --version &&   apt install wget -y; apt install yarn -y &&                      
                    wget https://nodejs.org/dist/latest-v8.x/node-v8.17.0-linux-arm64.tar.gz;
                    tar -xzf node-v8.17.0-linux-arm64.tar.gz -C /usr/local;
                    npm --version ;                                
                    npm i package.json;                
                '''
            }
        }
        stage('Test Npm build command succeeds') {
            steps {
               sh '''

                yarn build && ls .
                
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