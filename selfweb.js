function addMessage(sender, text) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function openTab(event, tabId) {// Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Activate clicked button
    event.currentTarget.classList.add('active');
    
  }
  // Tab functionality
function openTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// ===== Chatbot Data Information =====
const chatbotData = {
    // Personal info
    name: "Zyrus Alexis Gonowon",
    degree: "Bachelor's Degree in Computer Science (2023)",
    title: "Software Developer",
    
    // Skills
    skills: ["HTML", "CSS", "JavaScript", "Full-Stack Web Development", "Automation Development", "Software Problem Solving"],
    
    // Interests
    interests: ["Emerging Web Technologies", "Software Architecture", "Continuous Learning", "Collaborative Development"],
    
    // Hobbies - customize these!
    hobbies: ["coding personal projects", "exploring new technologies", "gaming", "watching tech tutorials"],
    
    // Experience - customize these!
    experience: [
        "Built a Resume Generator web application",
        "Developed Manuel Uy Beach Website",
        "Full-stack web development projects",
        "Automation solutions development"
    ],
    
    // Contact Info
    email: "zyrusrgonowon@gmail.com",
    phone: "+63 905 747 1654",
    facebook: "[facebook.com](https://www.facebook.com/zyrusalexis.gonowon/)"
};

// Responses of my chatbot
function getBotResponse(input) {
    const msg = input.toLowerCase().trim();
    
    // Greetings
    if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|howdy)/i.test(msg)) {
        return `Hello! I'm ${chatbotData.name}'s virtual assistant. How can I help you today? You can ask about his skills, experience, hobbies, or how to contact him.`;
    }
    
    // Name
    if (/who\s*(are\s*you|is\s*(he|zyrus))|your\s*name|his\s*name/i.test(msg)) {
        return `This is ${chatbotData.name}'s portfolio. He's a ${chatbotData.title} with a ${chatbotData.degree}.`;
    }
    
    // Education
    if (/education|degree|study|school|university|college|graduate/i.test(msg)) {
        return `Zyrus holds a ${chatbotData.degree}. He specializes in full-stack web development and automation solutions.`;
    }
    
    // Skills
    if (/skill|tech|stack|know|programming|language|can\s*(he|you)\s*do/i.test(msg)) {
        return `Zyrus's technical skills include:\n• ${chatbotData.skills.join('\n• ')}\n\nHe's always learning new technologies!`;
    }
    
    // Experience / Projects
    if (/experience|project|work|portfolio|built|created|developed/i.test(msg)) {
        return `Here's what Zyrus has worked on:\n• ${chatbotData.experience.join('\n• ')}\n\nCheck out the Projects tab to see them live!`;
    }
    
    // Hobbies
    if (/hobby|hobbies|free\s*time|fun|enjoy|like\s*to\s*do|interest|passion/i.test(msg)) {
        return `When not coding, Zyrus enjoys:\n• ${chatbotData.hobbies.join('\n• ')}\n\nHe's passionate about ${chatbotData.interests[0].toLowerCase()} and ${chatbotData.interests[1].toLowerCase()}.`;
    }
    
    // Contact
    if (/contact|email|phone|reach|hire|message|connect|social/i.test(msg)) {
        return `You can reach Zyrus at:\n📧 Email: ${chatbotData.email}\n📱 Phone: ${chatbotData.phone}\n📘 Facebook: Click the Contact tab for the link!\n\nHe'd love to hear from you!`;
    }
    
    // Availability / Hiring
    if (/available|hire|hiring|job|work\s*with|open\s*to/i.test(msg)) {
        return `Zyrus is open to new opportunities! Feel free to reach out via email at ${chatbotData.email} to discuss potential collaborations or positions.`;
    }
    
    // Location
    if (/where|location|based|live|from|country/i.test(msg)) {
        return `Zyrus is based in the Philippines. He's available for remote work and collaborations worldwide!`;
    }
    
    // Thanks
    if (/thank|thanks|thx|appreciate/i.test(msg)) {
        return `You're welcome! Is there anything else you'd like to know about Zyrus?`;
    }
    
    // Goodbye
    if (/bye|goodbye|see\s*you|later|gtg/i.test(msg)) {
        return `Goodbye! Thanks for visiting Zyrus's portfolio. Feel free to come back anytime!`;
    }
    
    // Help
    if (/help|what\s*can|how\s*to\s*use/i.test(msg)) {
        return `I can tell you about:\n• Zyrus's skills and tech stack\n• His projects and experience\n• Education background\n• Hobbies and interests\n• How to contact him\n\nJust ask away!`;
    }
    
    // Default response
    return `I'm not sure I understood that. Try asking about:\n• Skills or technologies\n• Projects and experience\n• Hobbies and interests\n• Contact information\n\nOr just say "help" for more options!`;
}

// chatbot initialization
document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('chatbot');
    const toggle = document.getElementById('chatbotToggle');
    const input = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    
    // Toggle chat window
    toggle.addEventListener('click', () => {
        chatbot.classList.toggle('open');
        if (chatbot.classList.contains('open')) {
            input.focus();
        }
    });
    
    // Send message
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        
        // Add user message
        addMessage(text, 'user');
        input.value = '';
        
        // Show typing indicator
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
        
        // Bot response after delay
        setTimeout(() => {
            typing.remove();
            const response = getBotResponse(text);
            addMessage(response, 'bot');
        }, 800 + Math.random() * 400);
    }
    
    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}-message`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }
    
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
  
