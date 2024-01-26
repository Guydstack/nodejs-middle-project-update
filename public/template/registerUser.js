
exports.sendUserMail = (userName) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Our Website</title>
    </head>
    <body style="font-family: 'Arial', sans-serif;">
    
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc;">
    
            <h2 style="color: #333;">Welcome to Our Website, ${userName}!</h2>
    
            <p>
                Hello ${userName},<br>
                Thank you for registering with us. We're excited to have you on board!
            </p>

            <img src="https://www.sakalaresortbali.com/wp-content/uploads/slider/cache/e19591b4a6308b6c38ea38cbc60a97db/1.-The-Restaurant-at-night.jpg" alt="Bali Restaurant" style="max-width: 100%; height: auto; margin-bottom: 15px;">

            <p>
            Feel free to explore our website and discover all the amazing features we have to offer. Click
            <a href="http://localhost:3000/index.html" style="color: #007BFF; text-decoration: underline;">here</a>
            to visit our home page.
            </p>
    
            <p>
                If you have any questions or need assistance, please don't hesitate to contact our support team.
            </p>
    
            <p>
                Best regards,<br>
                Bali resturant Team
            </p>
    
        </div>
    
    </body>
    </html>
    
    
    `
    };