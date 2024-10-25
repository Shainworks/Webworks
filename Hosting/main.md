## Renting of computers
"Renting of computers for hosting" refers to leasing server resources from a hosting provider rather than buying and maintaining your own physical servers. When you rent these resources, you’re essentially paying for access to the provider's powerful, high-availability computers, which are specifically designed to keep websites and applications running reliably. 

### Here’s how it works:

1. **Shared Hosting**: You share one physical server with multiple other users. This is usually the most affordable option since resources are divided among many sites.

2. **VPS (Virtual Private Server) Hosting**: You still share a server but with dedicated resources that are isolated from others. It’s a middle ground, providing better control and performance than shared hosting.

3. **Dedicated Hosting**: You rent an entire physical server just for your site or application. This is ideal for high-traffic websites needing robust performance and customization but is also more expensive.

4. **Cloud Hosting**: This distributes your data across multiple servers (in a "cloud"), making it highly scalable and resilient. 

Each of these options provides different levels of control, resources, and cost, allowing users to select a hosting type that best fits their website or application's requirements.
5. **Managed hosting**: This provides a fully maintained server where the hosting provider handles setup, updates, security, and backups. Examples include WP Engine for WordPress sites and Kinsta for cloud hosting.

## Yes, exactly! When you rent hosting, you'll usually receive:

1. **IP Address**: This is the unique address that identifies your server on the internet, allowing you or others to connect directly to your site or application.

2. **Username**: This is often provided for your hosting account or server access, allowing you to log in securely.

3. **Password**: This secure key is used with your username to access the control panel, FTP, or direct server (e.g., via SSH) to manage files, databases, and server settings.

These credentials are essential for securely managing and configuring your hosting environment.

## Now how to add our files to the server?....This is where Filezilla comes in (Usually prefered when needed to send files in bulk)
FileZilla is a popular, free, and open-source FTP (File Transfer Protocol) client that lets you transfer files between your computer and a remote server. It’s commonly used to upload website files to a web host, download backups, or manage server files directly.

### Key Features of FileZilla:
1. **FTP, FTPS, and SFTP Support**: FileZilla supports standard FTP, FTPS (FTP Secure), and SFTP (SSH File Transfer Protocol) for secure file transfers.
  
2. **Drag-and-Drop Interface**: It has a simple, user-friendly interface where you can drag and drop files between your local computer and the server.

3. **Directory Comparison and File Sync**: FileZilla lets you compare directories to see which files are different and sync them, making it easier to manage updates.

4. **Connection Management**: With FileZilla’s Site Manager, you can save login credentials for different servers, making it quick to connect without re-entering details each time.

5. **Cross-Platform**: FileZilla is available for Windows, macOS, and Linux, making it versatile for users on different operating systems.

It’s a go-to tool for web developers, IT administrators, and anyone needing to manage files on remote servers efficiently.

## How does .env and .gitignore work with API key's and node_modules
No, you cannot add your `node_modules` directly to a `.env` file. The `.env` file is specifically for environment variables, not for managing directories or files like `node_modules`. 

However, you can hide your `node_modules` directory from being pushed to your Git repository by using a `.gitignore` file. Here’s how it works:

### Steps to Ignore `node_modules`:

1. **Create a `.gitignore` File**: If you don’t already have one in your project root, create a file named `.gitignore`.

2. **Add `node_modules` to `.gitignore`**: Open the `.gitignore` file and add the following line:

   ```
   node_modules/
   ```

   This tells Git to ignore the `node_modules` folder and not track its contents.

3. **Using the `.env` File**: Continue using your `.env` file to store sensitive information (like API keys), but remember that it should also be included in your `.gitignore` file to prevent it from being pushed to your repository. 

### Example of a `.gitignore` File:
Here’s a simple example of what your `.gitignore` might look like:

```
# Ignore node_modules
node_modules/

# Ignore environment variables
.env
```

By doing this, both your `node_modules` and `.env` files will remain local to your development environment and won't be visible in your GitHub repository.


## Why to rent server's rather than uploiading into WEB hosting platforms
Renting computers (servers) for hosting, rather than just uploading files to a web hosting platform, offers several advantages:

1. **Control and Customization**: Renting a server, especially with options like VPS or dedicated hosting, allows you to configure the environment to meet specific needs. You can install custom software, choose your operating system, and modify server settings, which is often not possible on shared hosting platforms.

2. **Performance**: Dedicated or VPS servers provide better performance and reliability compared to standard shared hosting. You have dedicated resources (CPU, RAM, and storage) that can handle higher traffic volumes and more intensive applications.

3. **Security**: With rented servers, you have more control over security configurations. You can implement specific firewall rules, install security software, and regularly update the server to mitigate vulnerabilities, which might not be fully customizable on shared hosting platforms.

4. **Scalability**: Renting servers, especially in cloud hosting environments, allows for easy scaling. You can adjust your resources (like increasing RAM or adding more storage) as your website or application grows without having to migrate to a different platform.

5. **Compliance and Data Management**: For businesses, renting servers can help meet compliance requirements (like GDPR or HIPAA) by allowing more control over data storage and handling.

6. **Technical Support**: Managed hosting solutions provide technical support and maintenance for rented servers, ensuring they remain up to date and secure, while still allowing users to focus on their applications without worrying about server management.

In contrast, uploading files to a web hosting platform is often simpler and more cost-effective for small websites or projects where the need for customization, performance, or security is lower. The choice between renting servers and using web hosting platforms ultimately depends on the specific requirements of your project or business.

## Now what is VPS Hosting?? So called (Virtual private server)
**VPS (Virtual Private Server) hosting** is a type of web hosting that combines aspects of shared and dedicated hosting. It provides users with their own dedicated virtual server within a larger physical server, offering more control, resources, and flexibility than shared hosting.

### Key Features of VPS Hosting:

1. **Dedicated Resources**: In VPS hosting, you have allocated CPU, RAM, and storage resources that are not shared with other users. This ensures more consistent performance and reliability, especially during traffic spikes.

2. **Customization and Control**: You have root access to your virtual server, allowing you to install custom software, configure settings, and manage your server environment according to your needs.

3. **Scalability**: VPS hosting allows you to easily scale your resources (like CPU, RAM, and storage) as your website or application grows, without needing to migrate to a new server.

4. **Isolation**: Each VPS operates independently. If another VPS on the same physical server experiences issues or is affected by high traffic, your site remains unaffected, leading to increased stability.

5. **Cost-Effective**: VPS hosting is generally more affordable than dedicated hosting while still providing many of the same benefits. It’s a good middle ground for businesses that need more resources than shared hosting offers but aren’t ready for the higher costs of dedicated servers.

6. **Security**: With VPS hosting, you have more control over security configurations and can implement specific measures like firewalls, regular updates, and backups to protect your server.

### Use Cases for VPS Hosting:
- **Websites with Moderate Traffic**: Ideal for medium-sized businesses, blogs, or e-commerce sites that need more resources and reliability.
- **Development and Testing**: Developers often use VPS hosting to test applications in an isolated environment.
- **Running Custom Applications**: If you need specific software that isn’t supported on shared hosting, VPS allows you to install and run it.
- **Gaming Servers**: Many gaming applications benefit from the dedicated resources and control offered by VPS hosting.

### Conclusion:
VPS hosting strikes a balance between the affordability of shared hosting and the control of dedicated hosting, making it a popular choice for many businesses and developers seeking a robust hosting solution.

## Now why to use SSH(Secure shell) while connecting to server??
**SSH (Secure Shell)** is a network protocol used to securely access and manage devices over an unsecured network. It provides a secure channel over an insecure network by using encryption, ensuring that data transmitted between the client and server is protected from eavesdropping, tampering, or man-in-the-middle attacks.

### How to Use SSH:

To use SSH, you typically need an SSH client (like OpenSSH, PuTTY, or terminal applications on Linux and macOS) and the following information:

- **Hostname or IP Address**: The address of the server you want to connect to.
- **Username**: The account name you’ll use to log in.
- **Password or SSH Key**: Authentication credentials (either a password or a private key for public key authentication).

A common command to connect to a remote server via SSH looks like this:

```bash
ssh username@hostname_or_IP_address
```

By leveraging SSH, users can manage remote servers securely and efficiently, making it an essential tool in modern IT and development environments.


## How to host Node.js apps on Ubuntu

### Step 1 - Installing Node.js & build essentials
```
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
Now install build essentials
```
sudo apt-get install build-essential
```

### Step 2 - Create a sample Node.js app
You can also use your own app if you want to host it. Otherwise if you are just trying out, you can use a sample app.


### Step 3 - Install pm2 & launch your app
Install pm2 package which is a process manager for Node.js applications
```
sudo npm install -g pm2
```

Now launch your app using this command
```
pm2 start index.js
```

### Step 4 - Install nginx
Nginx is a web server which we will be using as a proxy
```
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites-available/default using following command 
```
sudo nano /etc/nginx/sites-available/default
```

We want this file to look like this:
```
. . .
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
...
```

### Step 5 - Test and restart nginx
Test and restart nginx using following commands
```
sudo nginx -t
```
Now restart using:
```
sudo systemctl restart nginx
```