pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&                   
                    apt update && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y &&
                    apt install nodejs -y && apt install npm -y  &&                         
                    npm i package.json && npm run-script build || true && npm react-scripts build

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