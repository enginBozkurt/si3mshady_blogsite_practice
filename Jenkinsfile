pipeline {
    agent any

    stages {
        stage('Clone Dev Branch ') {
            steps {

                  sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                    alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                    sudo git clone --branch dev https://github.com/si3mshady/si3mshady_blogsite_practice.git && sudo npm install si3mshady_blogsite_practice/package.json;              
            '''                     
          }

            }
        }

   
    stage('Build artifact') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                sudo npm run build  si3mshady_blogsite_practice/
            '''             

        }
    }
    }



    
      
        stage('Test build Directory Exists') {
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