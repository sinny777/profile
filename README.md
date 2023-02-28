# Profile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## IBM Cloud Code Engine Deployment



```

ibmcloud login --sso
ibmcloud resource groups
ibmcloud target -r jp-tok -g Hukam-Dev
ibmcloud ce project select --name smartthings

ibmcloud ce app create --name gurvinder-info --port 80 --cpu .0125 --memory 0.25  --image docker.io/sinny777/profile:latest


ibmcloud iam oauth-tokens --output json

GUID c8275a43-2c60-42ab-bb6a-72bbc0acd72b

curl -X GET \
  'https://globalcatalog.cloud.ibm.com/api/v1?include=*&q=name:codeengine+active:true' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

curl -X GET \
  'https://resource-controller.cloud.ibm.com/v2/resource_instances?name=MY_PROJECT&resource_id=RESOURCE_ID' \
  -H 'Authorization: Bearer ACCESS_TOKEN'


ibmcloud ce project select --name smartthings --kubecfg


ibmcloud iam api-key-create cliapikey -d "CodeEngineAPIKey" --file CodeEngineAPIKey


ibmcloud ce project create --name smartthings
ibmcloud ce project get --name smartthings

<!-- ibmcloud cr namespace-add smartthings
docker pull sinny777/smartthings-account:latest
docker tag smartthings-account:latest us.icr.io/smartthings/smartthings-account:latest
ibmcloud cr login
docker push us.icr.io/smartthings/smartthings-account:latest
ibmcloud ce build create --name smartthings-account --source https://github.ibm.com/gurvsin3/smartthings --context-dir /services/accounts --strategy kaniko --size medium --image docker.io/sinny777/smartthings-account:latest --registry-secret docker.io -->

ibmcloud ce build get --name smartthings-account
ibmcloud ce buildrun submit --name build-smartthings-account --build smartthings-account


ibmcloud ce secret delete --name auth-secrets
ibmcloud ce secret create --name auth-secrets --from-env-file secrets/auth-secrets.env
ibmcloud ce app create --name smartthings-keycloak --image docker.io/sinny777/smartthings-keycloak:latest --env-from-secret auth-secrets --min-scale 1 --cpu 4

ibmcloud ce secret create --name retail-secrets --from-env-file .env
ibmcloud ce app create --name retail-demo --image docker.io/sinny777/retail-demo:latest --min-scale 1 --env-from-secret retail-secrets

ibmcloud ce app update --name smartthings-keycloak --env-from-secret auth-secrets


ibmcloud ce secret create --name app-secrets --from-env-file secrets/app-secrets.env
ibmcloud ce secret get --name app-secrets
ibmcloud ce secret delete --name app-secrets

ibmcloud ce app create --name smartthings-accounts --image docker.io/sinny777/smartthings-auth:latest
ibmcloud ce app update --name smartthings-accounts --env-from-secret auth-secrets --min-scale 1

ibmcloud ce app create --name smartthings-accounts --image docker.io/sinny777/smartthings-auth:latest --env-from-secret auth-secrets
ibmcloud ce app create --name smartthings-iot --image docker.io/sinny777/smartthings-iot:latest --env-from-secret app-secrets --min-scale 1
ibmcloud ce app create --name smartthings-flows --image docker.io/sinny777/cloud-flows:latest --env-from-secret flow-secrets 


ibmcloud ce app logs --app smartthings-accounts


ibmcloud ce secret create --name flow-secrets --from-env-file .env


 awk -v ORS='\\n' '1' secrets/cert_v2.pem | pbcopy

 awk -v ORS='\\n' '1' hyper-dbaas-postgres.pem | pbcopy

 


```
