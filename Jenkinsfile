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
                    apt install ansible -y  

                    ls .          
                '''
            }
        }


          stage('test ssh') {
             steps {
                     sshagent(credentials: ['alquimista']) {
                sh '''             
                    ssh -t -o StrictHostKeyChecking=no  alquimista@ec2-3-225-222-165.compute-1.amazonaws.com mkdir /home/alquimista/scratch1 || true && echo "-1"
                    for file in $(find /var/jenkins_home/workspace/Si3mshady-Blogsite-CICD_dev/); do ssh -t -o StrictHostKeyChecking=no  \
                    alquimista@ec2-3-225-222-165.compute-1.amazonaws.com mkdir -p /home/alquimista$file ; done
                
              
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