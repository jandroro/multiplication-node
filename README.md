# Multiply - Node Console App

## Description

This is an application for generating multiplication table files. 

## How to use?

First, download or clone the repository and run in console the following command to download the associated dependencies:

```
npm install
```
        
To display the result of a given multiplication table in the console, run the following in the console:

```
node app list --base [base of multiplication table] --limit [limite for table]
```
        
For example:

```
node app list --base 2 --limit 12
```
            
The previous example will create the multiplication table of 2 with a limit of 12; that is from 1 to 12.
        
To create a .txt file with the same previous result explained previously, run the following in console:

```
node app create --base [base of multiplication table] --limit [limite for table]
```

For example:

```
node app create --base 2 --limit 12
```
            
The previous example will create a txt file in 'tables/', whose content will be the multiplication table of 2 with a limit of 12; that is from 1 to 12.
        
It is also possible to use short forms for the parameters '--base' (-b) and '--limit' (-l)