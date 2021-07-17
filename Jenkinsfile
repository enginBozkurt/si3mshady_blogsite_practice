job('Si3mshady BLOG site' ) {
    
   description('CICD practice & creating a blogsite')

   scm {
            git('https://github.com/si3mshady/si3mshady_blogsite_practice', 'dev')
        }
    
    
    steps {       

        shell('''
                echo "testing for aws credentials in repo!"
                echo "Setting up build environment!"
                apt update && apt install git -y && apt install make -y 
                apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y
                rm -rf git-secrets/ || true && echo "1"
                git clone https://github.com/awslabs/git-secrets.git && cd git-secrets/
                make install 
                git secrets --register-aws --global && cd ../
                git secrets --scan
                if [ $? -eq 0 ]; then exit -1; fi                     
                  
        ''')

          shell('''
                
                ls .
                            
        ''')


    }

    
}