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
                    git clone https://github.com/si3mshady/si3mshady_blogsite_practice
                    cd si3mshady_blogsite_practice; 
                    npm i package.json;

                '''
            }
        }
        stage('Test build directory exists') {
            steps {
               sh '''
                 ls -lrth build/
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