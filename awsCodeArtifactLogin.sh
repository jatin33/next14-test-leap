export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain leap-commons --domain-owner 921015586233 --region ap-south-1 --query authorizationToken --output text`
rm -rf .npmrc && touch .npmrc
printf "@leapfinance:registry=https://leap-commons-921015586233.d.codeartifact.ap-south-1.amazonaws.com/npm/leapfinance-npm-lib/
//leap-commons-921015586233.d.codeartifact.ap-south-1.amazonaws.com/npm/leapfinance-npm-lib/:always-auth=true
//leap-commons-921015586233.d.codeartifact.ap-south-1.amazonaws.com/npm/leapfinance-npm-lib/:_authToken=${CODEARTIFACT_AUTH_TOKEN}" > .npmrc