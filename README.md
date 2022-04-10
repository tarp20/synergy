# Synergy

Simple website with two pages:

1) List of Users
`localhost:3000/users`\

2) List of Groups for Users
`localhost:3000/groups`\


## **Functional Requirements**
Description of the first page:\

List of Users consist of: username, created, group, actions. username – User nickname\
created – Date of creating the user\
group - Group, to which the user will be added\
actions – two buttons 'Edit' and 'Delete'\

Also, under the list, there should be a button ‘Add User'\
for editing and adding new pages with such fields: username (text input) and group(select)\ Please see the example below\

Description of the second page:\

The list of groups should consist of: ID, Name, Description, Actions.\
Actions – Edit and Delete buttons\
Also, under the list, there should be a button `Add Group`\
For editing and adding new pages with such fields: Name (text input) and Description (text input).\
Group deletion is impossible if the user is assigned to this group.\

## **Brief description**

Backend: Django Rest Framework uses Postgresql database\

Frontend: React.js\

### **Steps to start on**

Download the project from github\
`git clone https://github.com/tarp20/synergy.git\
`cd synergy`
Add `.env.dev` config file in backend folder  with the following variables:\

```env
DEBUG=1
SECRET_KEY="3tnb78@d58y55rt26g+rr^%la5q+=@1@1j!$9_5!k)n@hjh_t8"
DJANGO_ALLOWED_HOSTS="localhost 127.0.0.1 [::1]"

DATABASE=postgres
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=db
POSTGRES_HOST=db
```


`run docker build .`\
`docker-compose up`\


 
