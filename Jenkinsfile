job('Si3mshady BLOG site' ) {
    
   description('CICD practice & creating a blogsite')

   scm {
            git('https://github.com/si3mshady/si3mshady_blogsite_practice', 'dev')
        }
    
    
    steps {       

        shell('''
               
                echo "Setting up build environment!"
                apt update && apt install git -y && apt install make -y 
                apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y
                apt install nodejs -y
                               
                  
        ''')

          shell('''
                
                ls .

                npm build
                            
        ''')


    }

    
}