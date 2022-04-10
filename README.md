# Synergy

Simple website with two pages:

1) List of Users<br/>
`localhost:3000/users`<br/>

2) List of Groups for Users<br/>
`localhost:3000/groups`<br/>


## **Functional Requirements**
Description of the first page:<br/>

List of Users consist of: username, created, group, actions. username – User nickname<br/>
created – Date of creating the user<br/>
group - Group, to which the user will be added<br/>
actions – two buttons 'Edit' and 'Delete'<br/>

Also, under the list, there should be a button ‘Add User'<br/>
for editing and adding new pages with such fields: username (text input) and group(select)\<br/>Please see the example below<br/>

Description of the second page:<br/>

The list of groups should consist of: ID, Name, Description, Actions.<br/>
Actions – Edit and Delete buttons<br/>
Also, under the list, there should be a button `Add Group`<br/>
For editing and adding new pages with such fields: Name (text input) and Description (text input).<br/>
Group deletion is impossible if the user is assigned to this group.<br/>

## **Brief description**

Backend: Django Rest Framework uses Postgresql database<br/>

Frontend: React.js<br/>

### **Steps to start on**

Download the project from github<br/>
`git clone https://github.com/tarp20/synergy.git<br/>
`cd synergy`<br/>
Add `.env.dev` config file in backend folder  with the following variables:<br/>

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


`run docker build .`<br/>
`docker-compose up`<br/>


 
