pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1"
                    git clone https://github.com/si3mshady/si3mshady_blogsite_practice
                    apt update && apt install git -y && apt install make -y 
                    apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y
                    apt install nodejs -y &  apt install npm -y            
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing.....'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}