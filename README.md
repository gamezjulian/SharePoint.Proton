# intranet
intranet implementation for Mattamy Homes

You can find documentation about the project at diffrentent places:
- [The wireframes](https://2tolead.mybalsamiq.com/projects/mattamyhomes/grid)
- [The project tracking and documents](https://2tolead.sharepoint.com/sites/clients/mattamyhomes/o365intranetecm/default.aspx)
- [The internal documentation](https://2tolead.sharepoint.com/sites/mattamyhomes/Shared%20Documents/Forms/AllItems.aspx)

## Technology Stack

## Prepare your development environment
Follow these steps to get ready to develop on this project :

- [Install Visual Studio Code](https://code.visualstudio.com/Download)
- [Install Git for Windows](https://git-scm.com/download/win)
- [Install NodeJS](https://nodejs.org/en/download/)
- [Install the Office 365 Patterns & Practices PowerShell Cmdlets (for **SharePoint Online**)](https://github.com/OfficeDev/PnP-PowerShell/)
- [Install SharePoint Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588)  

## Code on your machine

### Configure access to private packages (once on your machine)  
`npm i -g vsts-npm-auth --registry https://registry.npmjs.com`  
`notepad .npmrc`  
add these lines to the document, save it and close
```
registry=https://2tolead.pkgs.visualstudio.com/_packaging/Elektron/npm/registry
always-auth=true
```
`vsts-npm-auth -config .npmrc`  
`rm .npmrc`  

### Clone the repository

```
git clone https://2tolead.visualstudio.com/MattamyHomes/_git/Intranet
git checkout develop
git init -d
npm install
```


### Packaging Sequence 
To debug locally run the following commands:  
`npm run build`  (packages the components for local debug)  
`npm run deploy` (to deploy to SharePoint, make sure your configuration is up to date, only needed first time and/or when modifying SharePoint's artifacts)  
`npm run publish:search` (publishes the search schema and asks for a recrawl from the search engine)  
`npm start`  (start a local server to serve JS files)  
Then just open your favorite browser and user the debugger (a PBI is currently in the backlog to configure the auto-attach from code) 

If you want to do remote debug (without the dev server locally started) use `npm run deploy:dev` and make sure the urls in `config/Development.json` are properly set up first.  

Open Visual Studio Code and be ready to code !
```
code .
```
## Useful Links

## Documentation

## Known Issues or Limitations

- XSLT (i.e. ListView) webparts do not have their XmlDefinition applied due to a CSOM limitation in provisioning. View information is not carried over except for RowLimit which is worked-around within the SLW Azure process.

# Build and Test
## Build
There are currently two build definitions set up:  
- IntranetDev: ticks on every commit to the develop branch
- IntranetMaster: ticks on every commit to the master branch

## Release
There are currently two release definitions set up:
- IntranetDevQA: ticks on IntranetDev build output, approved by Haniel, deploys to the QA MOD tenant
- IntranetMasterProd: ticks on IntranetMaster build output, approved by Haniel, disabled for now

## Test
No automated tests are in place. It's done manually by the Team.

# Contribute
Make sure you follow [Git Flow Guidelines](http://danielkummer.github.io/git-flow-cheatsheet/) when you contribute to the project.

Please follow these guidelines for the commit comments:
- Include tasks/PBI that the commit impacts with that format #ID1, #ID2, at the begining of a comment
- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how
[more details](http://chris.beams.io/posts/git-commit/)

Currently no gated commits are set in place, we trust each other, don't mess up :)