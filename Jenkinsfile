pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&                   
                    apt upgrade && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y &&
                    apt install nodejs -y && apt install npm -y  &&       
                    git clone https://github.com/si3mshady/si3mshady_blogsite_practice
                    cd si3mshady_blogsite_practice; 
                    npm i package.json && npm build;
                '''
            }
        }
        stage('Test') {
            steps {
               sh '''
                 pwd 
               '''
            }
        }
        stage('Merge Dev Branch with Main Branch ') {
            steps {
                 sh '''
                 git checkout main & git merge origin/dev; 
                 git add . && git commit -m "successful merge";
                 git push -u origin main ;                
               '''
            }
        }
    }
}