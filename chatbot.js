/**
 * JK Community Farm Chatbot
 * Specialized chatbot for community farming and food security
 */

class LoudounGardenersChatbot {
    constructor(config = {}) {
        this.apiKey = config.apiKey || 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo';
        this.organization = config.organization || 'Loudoun County Master Gardeners';
        this.container = config.container || '#loudoun-gardeners-chatbot-container';
        this.characters = this.getGardenCharacters();
        this.currentCharacter = null;
        this.isOpen = false;
        this.messages = [];
        
        this.init();
    }

    getGardenCharacters() {
        return [
            {
                id: 'master-gardener-helen',
                name: 'Helen',
                role: 'Master Gardener',
                photo: 'https://via.placeholder.com/100x100/2E7D32/FFFFFF?text=Helen',
                label: 'Master Gardener',
                system: "You are Helen, a certified Master Gardener with 20 years of experience in horticulture and sustainable gardening practices. You're passionate about helping people grow healthy, beautiful gardens while protecting the environment. You have extensive knowledge of native plants, organic gardening, pest management, and soil health. Keep answers friendly, educational, and focused on Virginia gardening, especially Loudoun County conditions. Mention specific plants, techniques, and how to get help from the Master Gardener program.",
                intro: "Hello! I'm Helen, a Master Gardener here to help with your gardening questions. Whether you're dealing with plant problems, planning your garden, or want to learn about sustainable practices, I'm here to help!",
                color: '#2E7D32'
            },
            {
                id: 'horticulture-expert-mike',
                name: 'Mike',
                role: 'Horticulture Expert',
                photo: 'https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=Mike',
                label: 'Horticulture Expert',
                system: "You are Mike, a horticulture expert specializing in tree care, lawn management, and landscape design. You have 15 years of experience working with Virginia's climate and soil conditions. You're knowledgeable about tree diseases, proper pruning techniques, lawn care, and creating sustainable landscapes. Keep answers practical, science-based, and focused on helping homeowners maintain healthy landscapes. Mention specific techniques, timing, and when to seek professional help.",
                intro: "Hi there! I'm Mike, your horticulture expert. I specialize in tree care, lawn management, and landscape design. What questions do you have about your landscape?",
                color: '#4CAF50'
            },
            {
                id: 'native-plant-specialist-lisa',
                name: 'Lisa',
                role: 'Native Plant Specialist',
                photo: 'https://via.placeholder.com/100x100/8BC34A/FFFFFF?text=Lisa',
                label: 'Native Plant Specialist',
                system: "You are Lisa, a native plant specialist and conservation advocate. You're passionate about Virginia's native flora and creating wildlife-friendly gardens. You have expertise in native plant identification, pollinator gardens, invasive species management, and creating habitats for local wildlife. Keep answers focused on native plants, biodiversity, and creating sustainable ecosystems in home gardens. Mention specific native plants, their benefits, and how to incorporate them into landscapes.",
                intro: "Greetings! I'm Lisa, your native plant specialist. I love helping people create beautiful, wildlife-friendly gardens with Virginia's native plants. What would you like to know about native gardening?",
                color: '#8BC34A'
            },
            {
                id: 'garden-educator-emma',
                name: 'Emma',
                role: 'Garden Educator',
                photo: 'https://via.placeholder.com/100x100/689F38/FFFFFF?text=Emma',
                label: 'Garden Educator',
                system: "You are Emma, a garden educator who loves teaching children and adults about gardening. You specialize in school gardens, youth programs, and making gardening accessible to everyone. You have experience with garden-to-table programs, educational workshops, and creating engaging learning experiences. Keep answers educational, encouraging, and focused on making gardening fun and accessible. Mention educational resources, programs, and how to get involved with the Master Gardener community.",
                intro: "Hello! I'm Emma, your garden educator. I love teaching people of all ages about the joy of gardening! Whether you're a beginner or experienced gardener, I'm here to help you learn and grow.",
                color: '#689F38'
            }
        ];
    }

    init() {
        this.createChatbotUI();
        this.loadStyles();
        this.attachEventListeners();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <div id="loudoun-gardeners-chatbot" class="loudoun-gardeners-chatbot">
                <div class="chatbot-launcher" id="chatbot-launcher">
                    <i class="fas fa-seedling"></i>
                    <span class="launcher-text">Garden Help</span>
                </div>
                
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="header-content">
                            <h3>${this.organization} Help Desk</h3>
                            <p>Get expert gardening advice</p>
                        </div>
                        <button class="close-btn" id="close-chatbot">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="character-selector">
                        <h4>Choose your gardening expert:</h4>
                        <div class="character-grid">
                            ${this.characters.map(character => `
                                <div class="character-card" data-character="${character.id}">
                                    <img src="${character.photo}" alt="${character.name}" class="character-photo">
                                    <div class="character-info">
                                        <h5>${character.name}</h5>
                                        <p>${character.role}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="chat-messages" id="chat-messages">
                        <div class="welcome-message">
                            <p>Welcome to the Loudoun County Master Gardeners Help Desk! Choose an expert above to get started with your gardening questions.</p>
                        </div>
                    </div>
                    
                    <div class="chat-input-container">
                        <div class="quick-prompts">
                            <button class="quick-prompt" data-prompt="How do I start a vegetable garden?">Start a Vegetable Garden</button>
                            <button class="quick-prompt" data-prompt="What native plants grow well in Virginia?">Native Plants</button>
                            <button class="quick-prompt" data-prompt="How do I identify and treat plant diseases?">Plant Diseases</button>
                            <button class="quick-prompt" data-prompt="What's the best way to care for my lawn?">Lawn Care</button>
                        </div>
                        <div class="input-group">
                            <input type="text" id="chat-input" placeholder="Ask your gardening question..." maxlength="500">
                            <button id="send-message">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector(this.container).innerHTML = chatbotHTML;
    }

    loadStyles() {
        const styles = `
            .loudoun-gardeners-chatbot {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                font-family: 'Inter', sans-serif;
            }

            .chatbot-launcher {
                background: linear-gradient(135deg, #2E7D32, #4CAF50);
                color: white;
                padding: 15px 20px;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(46, 125, 50, 0.3);
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
                font-weight: 500;
            }

            .chatbot-launcher:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 25px rgba(46, 125, 50, 0.4);
            }

            .chatbot-launcher i {
                font-size: 1.2rem;
            }

            .chatbot-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 380px;
                height: 500px;
                background: white;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                display: none;
                flex-direction: column;
                overflow: hidden;
            }

            .chatbot-header {
                background: linear-gradient(135deg, #2E7D32, #4CAF50);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-content h3 {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 600;
            }

            .header-content p {
                margin: 5px 0 0 0;
                opacity: 0.9;
                font-size: 0.9rem;
            }

            .close-btn {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 5px;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }

            .close-btn:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }

            .character-selector {
                padding: 20px;
                border-bottom: 1px solid #e0e0e0;
            }

            .character-selector h4 {
                margin: 0 0 15px 0;
                color: #333;
                font-size: 1rem;
            }

            .character-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }

            .character-card {
                background: #f8f9fa;
                border: 2px solid #e0e0e0;
                border-radius: 12px;
                padding: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
            }

            .character-card:hover {
                border-color: #4CAF50;
                background: #f1f8e9;
            }

            .character-card.selected {
                border-color: #4CAF50;
                background: #e8f5e8;
            }

            .character-photo {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-bottom: 8px;
            }

            .character-info h5 {
                margin: 0;
                font-size: 0.9rem;
                color: #333;
            }

            .character-info p {
                margin: 2px 0 0 0;
                font-size: 0.8rem;
                color: #666;
            }

            .chat-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                background: #f8f9fa;
            }

            .welcome-message {
                background: white;
                padding: 15px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                margin-bottom: 15px;
            }

            .welcome-message p {
                margin: 0;
                color: #333;
                font-size: 0.9rem;
            }

            .message {
                margin-bottom: 15px;
                display: flex;
                gap: 10px;
            }

            .message.user {
                flex-direction: row-reverse;
            }

            .message-avatar {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                flex-shrink: 0;
            }

            .message-content {
                background: white;
                padding: 12px 16px;
                border-radius: 18px;
                max-width: 250px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .message.user .message-content {
                background: #4CAF50;
                color: white;
            }

            .message-content p {
                margin: 0;
                font-size: 0.9rem;
                line-height: 1.4;
            }

            .typing-indicator {
                display: flex;
                gap: 5px;
                padding: 12px 16px;
                background: white;
                border-radius: 18px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                max-width: 80px;
            }

            .typing-dot {
                width: 8px;
                height: 8px;
                background: #4CAF50;
                border-radius: 50%;
                animation: typing 1.4s infinite ease-in-out;
            }

            .typing-dot:nth-child(1) { animation-delay: -0.32s; }
            .typing-dot:nth-child(2) { animation-delay: -0.16s; }

            @keyframes typing {
                0%, 80%, 100% { transform: scale(0); }
                40% { transform: scale(1); }
            }

            .chat-input-container {
                padding: 20px;
                border-top: 1px solid #e0e0e0;
                background: white;
            }

            .quick-prompts {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 15px;
            }

            .quick-prompt {
                background: #f1f8e9;
                border: 1px solid #4CAF50;
                color: #2E7D32;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .quick-prompt:hover {
                background: #4CAF50;
                color: white;
            }

            .input-group {
                display: flex;
                gap: 10px;
            }

            #chat-input {
                flex: 1;
                padding: 12px 16px;
                border: 1px solid #e0e0e0;
                border-radius: 25px;
                font-size: 0.9rem;
                outline: none;
                transition: border-color 0.3s ease;
            }

            #chat-input:focus {
                border-color: #4CAF50;
            }

            #send-message {
                background: #4CAF50;
                color: white;
                border: none;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #send-message:hover {
                background: #2E7D32;
                transform: scale(1.05);
            }

            @media (max-width: 480px) {
                .chatbot-window {
                    width: 350px;
                    height: 450px;
                    right: -10px;
                }
                
                .character-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    attachEventListeners() {
        const launcher = document.getElementById('chatbot-launcher');
        const closeBtn = document.getElementById('close-chatbot');
        const sendBtn = document.getElementById('send-message');
        const input = document.getElementById('chat-input');
        const characterCards = document.querySelectorAll('.character-card');
        const quickPrompts = document.querySelectorAll('.quick-prompt');

        launcher.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.toggleChatbot());

        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        characterCards.forEach(card => {
            card.addEventListener('click', () => {
                const characterId = card.dataset.character;
                this.selectCharacter(characterId);
            });
        });

        quickPrompts.forEach(prompt => {
            prompt.addEventListener('click', () => {
                const promptText = prompt.dataset.prompt;
                this.addMessage(promptText, 'user');
                this.sendMessageToAI(promptText);
            });
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            window.style.display = 'flex';
            document.getElementById('chat-input').focus();
        } else {
            window.style.display = 'none';
        }
    }

    selectCharacter(characterId) {
        this.currentCharacter = this.characters.find(c => c.id === characterId);
        
        // Update UI
        document.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-character="${characterId}"]`).classList.add('selected');
        
        // Add character intro message
        this.addMessage(this.currentCharacter.intro, 'bot');
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        if (sender === 'bot' && this.currentCharacter) {
            messageDiv.innerHTML = `
                <img src="${this.currentCharacter.photo}" alt="${this.currentCharacter.name}" class="message-avatar">
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        this.messages.push({ text, sender, timestamp: new Date() });
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        if (!this.currentCharacter) {
            this.addMessage('Please select a gardening expert first!', 'bot');
            return;
        }
        
        this.addMessage(message, 'user');
        input.value = '';
        
        this.showTypingIndicator();
        this.sendMessageToAI(message);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <img src="${this.currentCharacter.photo}" alt="${this.currentCharacter.name}" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async sendMessageToAI(message) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `${this.currentCharacter.system}\n\nUser: ${message}\n\n${this.currentCharacter.name}:`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 800,
                    }
                })
            });

            const data = await response.json();
            
            // Remove typing indicator
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const aiResponse = data.candidates[0].content.parts[0].text.trim();
                this.addMessage(aiResponse, 'bot');
            } else {
                this.addMessage('I apologize, but I\'m having trouble processing your request right now. Please try again or contact the Master Gardener Help Desk directly.', 'bot');
            }
        } catch (error) {
            console.error('Error sending message to AI:', error);
            
            // Remove typing indicator
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
            
            this.addMessage('I apologize, but I\'m experiencing technical difficulties. Please try again or contact the Master Gardener Help Desk at 703-771-5150.', 'bot');
        }
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new LoudounGardenersChatbot({
        apiKey: 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo',
        organization: 'Loudoun County Master Gardeners'
    });
}); 