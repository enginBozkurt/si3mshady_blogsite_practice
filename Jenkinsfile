pipeline {
    agent any

    stages {
        stage('Clone Dev Branch') {
            steps {

                  sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                    alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                   git clone --branch dev https://github.com/si3mshady/si3mshady_blogsite_practice.git || true echo '-1' && 
                    sudo npm install si3mshady_blogsite_practice/package.json true echo '-1' && ;              
            '''                     
          }

            }
        }

   
    stage('Build artifact') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                sudo npm run build  si3mshady_blogsite_practice || true echo '-1' && /
            '''             

        }
    }
    }
    
      
        stage('Test Build Directory Exists') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                ls -lrth  si3mshady_blogsite_practice/build
            '''                         }
             }
        }
    }
}