pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&                   
                    apt update && apt install git -y && apt install make -y &&
                    apt install curl -y &&  apt install nodejs -y && 
                    apt install npm -y  && apt install yarn -y &&   apt update;                         

                    yarn install  && yarn build;

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