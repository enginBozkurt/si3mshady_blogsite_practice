pipeline {
    agent any

    stages {
        stage('Clone Dev Branch ') {
            steps {

                  sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                git clone --branch dev https://github.com/si3mshady/si3mshady_blogsite_practice.git                  
            '''                     
          }

            }
        }


      

    stage('Make build ') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
               npm build si3mshady_blogsite_practice/
            '''             

        }
    }
    }



    
      
        stage('Merge Dev Branch with Main Branch') {
            steps {
                 sh ''' git checkout main & git merge origin/dev;      '''
            }
        }
    }
}