pipeline {
    agent any

    environment {
        scannerHome = tool 'sonarqube'
    }

    stages {
        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('sonarqube') {
                        sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=second \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://192.168.0.106:9000
                        """
                    }
                }
            }
        }
    }
}
