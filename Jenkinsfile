pipeline {
    agent any

    stages {

        stage('Clone Dev Branch') {
            steps {

                  sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                    alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                   git clone --branch dev https://github.com/si3mshady/si3mshady_blogsite_practice.git || true && echo '-1';             
            '''                     
          }
            }
        }

    stage('Install dependencies') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                cd si3mshady_blogsite_practice/ &&  npm install 
            '''             

        }
    }
    }

   
    stage('Test / Build artifact') {
            steps {
                    sshagent(credentials: ['alquimista']) {
            sh ''' ssh -v -t -t -o StrictHostKeyChecking=no \
                alquimista@ec2-3-225-222-165.compute-1.amazonaws.com \
                 cd si3mshady_blogsite_practice/ &&   npm run build ./package.json
            '''             

        }
    }
    }
    


        stage('Merge Branches') {
                steps {
                    sh '''
                       apt update && apt install -y;
                    git checkout main & git merge origin/dev; 
                       
                    '''
                }
            }



    }
}

// Elliott Arnold 