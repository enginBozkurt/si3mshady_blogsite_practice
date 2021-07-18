pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&   
                    apt upgrade -y && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli &&
                    apt install nodejs -y && apt install npm -y  &&     
                    apt install ansible -y &&   npm i package.json;   

                    ls .          
                '''
            }
        }


          stage('test ssh') {
             steps {
                     sshagent(credentials: ['alquimista']) {
                sh '''             
                    ssh -t -o StrictHostKeyChecking=no  alquimista@ec2-3-225-222-165.compute-1.amazonaws.com 
                '''
          }
      }
        }

        
        stage('Test Npm build command succeeds') {
            steps {
               sh '''
                    ls ./             
               '''
            }
        }
        stage('Merge Dev Branch with Main Branch') {
            steps {
                 sh '''
                 ls ./
                 git checkout main & git merge origin/dev;          
                     
               '''
            }
        }
    }
}