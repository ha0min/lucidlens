# LucidLens 🌙✨

LucidLens is a sophisticated dream analysis platform that harnesses the power of AI to transform your dreams into visual art while providing deep psychological insights. Built with modern web technologies and AWS infrastructure, it offers a unique approach to understanding your subconscious mind.



https://github.com/user-attachments/assets/038aed9d-193f-413e-a4d6-124c642ea830

## 🌟 How It Works

![How LucidLens Works](https://github.com/user-attachments/assets/140dd7c3-12dc-4a3d-b5c6-499a9f98c8f8)


1. **Dream Capture**: Users record their dream fragments through an intuitive interface
2. **AI Analysis**: System generates customized questions based on dream content
3. **Visualization**: Dreams are transformed into stunning AI-generated artwork

## ✨ Features

- 🧠 **AI-Powered Dream Analysis**
  - Advanced algorithms powered by GPT for psychological insight
  - Customized questions based on dream fragments
  - Pattern recognition across your dream journal

- 🎨 **Dream Visualization**
  - Transform written dreams into AI-generated artwork
  - High-quality image generation using Bedrock
  - Visual dream gallery for tracking your journey

- 👥 **Social Features**
  - Share dreams with your community
  - Collaborative dream analysis
  - Secure authentication via GitHub

## 🏗 Architecture

![Architecture](https://github.com/user-attachments/assets/11e0bea3-9b75-4e53-ac33-8bf5eefacd23)

LucidLens works like a well-orchestrated dream processing factory. Here's how it all comes together:

### How Your Dream Flows Through the System

1. **Entry Point (AWS Amplify & API Gateway)**
   - When you use our app, you're actually interacting with a secure website hosted by AWS Amplify
   - Every action you take (like submitting a dream) goes through our API Gateway, which acts like a smart doorman ensuring everything is secure and goes to the right place

2. **Dream Processing (Lambda & AI Services)**
   - Your dream text is sent to Lambda functions - think of these as specialized workers that handle specific tasks
   - These workers collaborate with:
     - GPT for understanding and analyzing your dream's meaning
     - Bedrock for turning your dream into artwork
     - EC2 servers that handle the heavy lifting of AI computations

3. **Storage (S3 & DynamoDB)**
   - Your dream texts and generated images are safely stored in Amazon S3 - like a secure digital art gallery
   - Your user profile, preferences, and dream patterns are kept in DynamoDB - think of it as a high-speed, organized filing system

4. **Safety and Monitoring (CloudWatch)**
   - CloudWatch acts like a security camera system, keeping an eye on everything to ensure:
     - The app runs smoothly
     - Your data is safe
     - Any issues are caught and fixed quickly

### Technical Components

- **Frontend**: Next.js 14 application with AWS Amplify hosting
- **API Layer**: Amazon API Gateway + Lambda functions
- **AI Processing**: 
  - GPT integration for dream analysis
  - Amazon Bedrock for image generation
  - EC2 instances for AI compute
- **Storage**: 
  - Amazon S3 for dream images
  - DynamoDB for user data
- **Monitoring**: 
  - CloudWatch for performance metrics
  - CloudWatch Logs for system monitoring

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/lucidlens.git
   cd lucidlens
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Follow the https://authjs.dev/getting-started/installation to create your own credential provider keys and secret.
   
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   AUTH_SECRET=your_auth_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
lucidlens/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── types/           # TypeScript definitions
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI/UX**: 
  - Tailwind CSS
  - shadcn/ui components
  - Framer Motion for animations
  - Lucide icons
  - Vaul for drawers
- **State Management**: SWR
- **Authentication**: NextAuth.js with GitHub provider

## 🔐 Authentication

LucidLens uses NextAuth.js with GitHub OAuth for secure authentication. Users must be authenticated to:
- Create and save dream entries
- Access their personal dream gallery
- Share dreams with others
- View dream analysis insights

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
