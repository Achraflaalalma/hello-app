pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t lfrida404/hello-api:${BUILD_NUMBER} .'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'dist/**'
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push lfrida404/hello-api:${BUILD_NUMBER}'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop hello-api || true
                docker rm hello-api || true

                docker run -d \
                  --name hello-api \
                  -p 3000:3000 \
                  lfrida404/hello-api:${BUILD_NUMBER}
                '''
            }
        }
    }
}