export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctIndex: number;
}

const allQuestions: QuizQuestion[] = [
    // ── Phishing & Social Engineering (1-15) ──
    {
        id: 1,
        question: "What does 'phishing' refer to in cybersecurity?",
        options: [
            "A type of malware that encrypts files",
            "A social engineering attack that tricks users into revealing sensitive information",
            "A method of securing network connections",
            "A tool used for penetration testing"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        question: "Which of these is an example of social engineering?",
        options: [
            "Installing a software update",
            "Pretending to be an IT technician to gain access to a system",
            "Running a firewall scan",
            "Using a strong password"
        ],
        correctIndex: 1
    },
    {
        id: 3,
        question: "What is 'spear phishing'?",
        options: [
            "A random mass email attack",
            "A targeted phishing attack directed at a specific individual or organization",
            "A type of fishing game online",
            "A method of encrypting emails"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        question: "What should you do if you receive a suspicious email with an attachment?",
        options: [
            "Open it to check what's inside",
            "Forward it to your friends",
            "Delete it or report it without opening the attachment",
            "Reply to the sender asking for more details"
        ],
        correctIndex: 2
    },
    {
        id: 5,
        question: "What is 'vishing'?",
        options: [
            "A phishing attack conducted via voice calls",
            "A type of computer virus",
            "Visual hacking through screen capture",
            "A VPN-based attack"
        ],
        correctIndex: 0
    },
    {
        id: 6,
        question: "What is 'smishing'?",
        options: [
            "Phishing through social media",
            "Phishing via SMS text messages",
            "Smashing a hard drive for data destruction",
            "A type of encryption"
        ],
        correctIndex: 1
    },
    {
        id: 7,
        question: "What is 'pretexting' in social engineering?",
        options: [
            "Sending mass emails to random people",
            "Creating a fabricated scenario to manipulate a victim into providing information",
            "Encrypting sensitive communications",
            "Installing antivirus on another person's computer"
        ],
        correctIndex: 1
    },
    {
        id: 8,
        question: "What is 'baiting' in cybersecurity?",
        options: [
            "Using free software ads to protect users",
            "Luring victims with something enticing, like a free USB drive loaded with malware",
            "A method for testing network speed",
            "Backing up data to an external drive"
        ],
        correctIndex: 1
    },
    {
        id: 9,
        question: "What is a 'watering hole attack'?",
        options: [
            "Flooding a network with traffic",
            "Compromising a website frequently visited by a target group",
            "Poisoning a water supply system via SCADA hacking",
            "Installing malware through email"
        ],
        correctIndex: 1
    },
    {
        id: 10,
        question: "Which is a red flag in a phishing email?",
        options: [
            "The email comes from a known contact",
            "The email has proper grammar and formatting",
            "The email creates urgency and asks you to click a link immediately",
            "The email is relevant to your recent activity"
        ],
        correctIndex: 2
    },
    {
        id: 11,
        question: "'Tailgating' in physical security means:",
        options: [
            "Following someone into a restricted area without authorization",
            "Placing a tracking device on someone's car",
            "Monitoring internet traffic",
            "Accessing a public Wi-Fi network"
        ],
        correctIndex: 0
    },
    {
        id: 12,
        question: "What is 'whaling' in cybersecurity?",
        options: [
            "Attacking large computer servers",
            "A phishing attack targeting high-profile executives",
            "Scanning the ocean floor for cables",
            "A DDoS attack on cloud services"
        ],
        correctIndex: 1
    },
    {
        id: 13,
        question: "What is 'pharming'?",
        options: [
            "Growing organic food online",
            "Redirecting website traffic to a fraudulent site without the user's knowledge",
            "A secure method of web browsing",
            "A type of cloud computing"
        ],
        correctIndex: 1
    },
    {
        id: 14,
        question: "What does 'shoulder surfing' refer to?",
        options: [
            "A type of surfing competition",
            "Looking over someone's shoulder to steal confidential information",
            "Hacking satellite communications",
            "A method of encrypting data"
        ],
        correctIndex: 1
    },
    {
        id: 15,
        question: "What is 'dumpster diving' in cybersecurity?",
        options: [
            "Recycling old computers",
            "Searching through trash for confidential information",
            "Deep web browsing",
            "Data mining from public databases"
        ],
        correctIndex: 1
    },

    // ── Passwords & Authentication (16-30) ──
    {
        id: 16,
        question: "Which of the following is the strongest password?",
        options: [
            "password123",
            "MyDogSpot",
            "j7#Kp!9xLm@2qW",
            "12345678"
        ],
        correctIndex: 2
    },
    {
        id: 17,
        question: "What is two-factor authentication (2FA)?",
        options: [
            "Using two different passwords for one account",
            "A security process that requires two distinct forms of identification",
            "Encrypting data twice for extra security",
            "Logging into two accounts at the same time"
        ],
        correctIndex: 1
    },
    {
        id: 18,
        question: "What is the safest way to store passwords?",
        options: [
            "Write them on a sticky note near your monitor",
            "Use the same password for all accounts",
            "Store them in a reputable password manager",
            "Save them in a text file on your desktop"
        ],
        correctIndex: 2
    },
    {
        id: 19,
        question: "What is a brute force attack?",
        options: [
            "Physically breaking into a data center",
            "Guessing passwords by systematically trying all possible combinations",
            "Sending fake emails to steal credentials",
            "Installing malware through a USB drive"
        ],
        correctIndex: 1
    },
    {
        id: 20,
        question: "What is multi-factor authentication (MFA)?",
        options: [
            "Using multiple computers to log in",
            "Authentication requiring multiple types of evidence to verify identity",
            "Having multiple email accounts",
            "A method of encrypting multiple files at once"
        ],
        correctIndex: 1
    },
    {
        id: 21,
        question: "Which helps prevent unauthorized access to a computer?",
        options: [
            "Leaving your computer unlocked",
            "Sharing your password with trusted colleagues",
            "Using strong passwords and enabling screen lock",
            "Disabling antivirus software"
        ],
        correctIndex: 2
    },
    {
        id: 22,
        question: "What is a 'dictionary attack'?",
        options: [
            "Looking up words in a dictionary during a hack",
            "Using a list of common words and phrases to guess passwords",
            "Attacking language translation services",
            "Encrypting a dictionary file"
        ],
        correctIndex: 1
    },
    {
        id: 23,
        question: "What is 'credential stuffing'?",
        options: [
            "Creating new accounts with fake credentials",
            "Using stolen username/password pairs from one breach to access other sites",
            "Stuffing envelopes with login information",
            "An encryption technique"
        ],
        correctIndex: 1
    },
    {
        id: 24,
        question: "What is a passphrase?",
        options: [
            "A single word used as a password",
            "A longer password made up of multiple words strung together",
            "A password written in a foreign language",
            "A password that expires every day"
        ],
        correctIndex: 1
    },
    {
        id: 25,
        question: "Why should you never reuse passwords across different accounts?",
        options: [
            "It makes passwords easier to remember",
            "If one account is compromised, all accounts using that password are at risk",
            "It is illegal to reuse passwords",
            "Websites require unique passwords by law"
        ],
        correctIndex: 1
    },
    {
        id: 26,
        question: "What does a 'salt' do in password hashing?",
        options: [
            "Makes the password taste better",
            "Adds random data to the password before hashing to prevent rainbow table attacks",
            "Encrypts the password twice",
            "Compresses the password for storage"
        ],
        correctIndex: 1
    },
    {
        id: 27,
        question: "What is biometric authentication?",
        options: [
            "Using a password with numbers only",
            "Authentication using physical characteristics like fingerprints or face recognition",
            "Using two passwords at the same time",
            "Logging in through a VPN"
        ],
        correctIndex: 1
    },
    {
        id: 28,
        question: "What is a 'rainbow table'?",
        options: [
            "A colorful user interface for hacking tools",
            "A precomputed table used to reverse cryptographic hash functions for cracking passwords",
            "A network mapping diagram",
            "A type of firewall"
        ],
        correctIndex: 1
    },
    {
        id: 29,
        question: "What is the recommended minimum password length for strong security?",
        options: [
            "4 characters",
            "6 characters",
            "8 characters",
            "12 characters or more"
        ],
        correctIndex: 3
    },
    {
        id: 30,
        question: "What is Single Sign-On (SSO)?",
        options: [
            "Using one password for all websites without security",
            "An authentication method allowing users to access multiple apps with one set of credentials",
            "Signing into a computer only once per year",
            "A type of malware"
        ],
        correctIndex: 1
    },

    // ── Malware (31-45) ──
    {
        id: 31,
        question: "What is ransomware?",
        options: [
            "Software that displays ads on your computer",
            "A program that speeds up your internet",
            "Malicious software that encrypts data and demands payment for its release",
            "An antivirus tool"
        ],
        correctIndex: 2
    },
    {
        id: 32,
        question: "Which type of malware disguises itself as legitimate software?",
        options: [
            "Worm",
            "Trojan Horse",
            "Adware",
            "Spyware"
        ],
        correctIndex: 1
    },
    {
        id: 33,
        question: "What does 'malware' stand for?",
        options: [
            "Mandatory Software",
            "Malicious Software",
            "Management Software",
            "Maintained Software"
        ],
        correctIndex: 1
    },
    {
        id: 34,
        question: "What is a keylogger?",
        options: [
            "A tool that locks your keyboard",
            "Software that records every keystroke made on a computer",
            "A device that cleans your keyboard",
            "An encryption algorithm for keyboards"
        ],
        correctIndex: 1
    },
    {
        id: 35,
        question: "Which of the following is NOT a type of malware?",
        options: [
            "Trojan",
            "Worm",
            "Firewall",
            "Ransomware"
        ],
        correctIndex: 2
    },
    {
        id: 36,
        question: "What is a computer worm?",
        options: [
            "A type of hardware failure",
            "Malware that replicates itself and spreads to other computers without user action",
            "A beneficial program that cleans viruses",
            "A physical cable used in networking"
        ],
        correctIndex: 1
    },
    {
        id: 37,
        question: "What is adware?",
        options: [
            "Software that blocks all advertisements",
            "Software that automatically displays or downloads advertisements",
            "Advanced security software",
            "A type of strong encryption"
        ],
        correctIndex: 1
    },
    {
        id: 38,
        question: "What is spyware?",
        options: [
            "Software used to spy on competitor businesses legally",
            "Software that secretly monitors and collects user data without consent",
            "A camera security system",
            "A government surveillance program"
        ],
        correctIndex: 1
    },
    {
        id: 39,
        question: "What is a rootkit?",
        options: [
            "A gardening software",
            "Malware designed to gain unauthorized root/admin access and hide its presence",
            "A tool for rooting Android phones",
            "A type of keyboard shortcut"
        ],
        correctIndex: 1
    },
    {
        id: 40,
        question: "What is a logic bomb?",
        options: [
            "A type of explosive device",
            "Malicious code that activates when specific conditions are met",
            "A debugging tool",
            "A mathematical equation in programming"
        ],
        correctIndex: 1
    },
    {
        id: 41,
        question: "What is fileless malware?",
        options: [
            "Malware that doesn't take up disk space because it runs in memory",
            "A virus that only infects empty files",
            "Software that deletes all files on a system",
            "A type of antivirus program"
        ],
        correctIndex: 0
    },
    {
        id: 42,
        question: "How does a polymorphic virus evade detection?",
        options: [
            "It only attacks when the computer is off",
            "It changes its code each time it replicates to avoid signature detection",
            "It hides inside image files only",
            "It disables the internet connection"
        ],
        correctIndex: 1
    },
    {
        id: 43,
        question: "What is a 'botnet'?",
        options: [
            "A network of antivirus programs",
            "A collection of internet-connected devices infected and controlled by a hacker",
            "A secure chat platform",
            "A type of blockchain network"
        ],
        correctIndex: 1
    },
    {
        id: 44,
        question: "What is 'scareware'?",
        options: [
            "Horror-themed video games",
            "Malware that uses fake warnings to trick users into buying unnecessary software",
            "Security software that scares away hackers",
            "A type of antivirus update"
        ],
        correctIndex: 1
    },
    {
        id: 45,
        question: "What is a virus signature?",
        options: [
            "A digital autograph left by hackers",
            "A unique pattern of code used by antivirus software to identify specific malware",
            "The name given to a new virus by researchers",
            "An encrypted email attachment"
        ],
        correctIndex: 1
    },

    // ── Network Security (46-60) ──
    {
        id: 46,
        question: "What does a firewall do?",
        options: [
            "Monitors and controls incoming and outgoing network traffic",
            "Encrypts stored data on a hard drive",
            "Detects viruses in email attachments",
            "Backs up files to the cloud"
        ],
        correctIndex: 0
    },
    {
        id: 47,
        question: "What does VPN stand for?",
        options: [
            "Virtual Private Network",
            "Very Protected Network",
            "Virtual Public Node",
            "Verified Personal Network"
        ],
        correctIndex: 0
    },
    {
        id: 48,
        question: "What is a DDoS attack?",
        options: [
            "Stealing data through USB drives",
            "A physical attack on server hardware",
            "Overwhelming a server with traffic to make it unavailable",
            "Hacking into a single computer remotely"
        ],
        correctIndex: 2
    },
    {
        id: 49,
        question: "What is a man-in-the-middle (MITM) attack?",
        options: [
            "A physical theft of a computer",
            "An attacker secretly intercepts and relays communication between two parties",
            "An attack that targets the middle layer of a network",
            "A type of password brute force attack"
        ],
        correctIndex: 1
    },
    {
        id: 50,
        question: "What is an IP address?",
        options: [
            "A physical address of a computer user",
            "A unique numerical label assigned to each device on a network",
            "A type of email address",
            "A password for internet access"
        ],
        correctIndex: 1
    },
    {
        id: 51,
        question: "What is the best practice when using public Wi-Fi?",
        options: [
            "Access your bank account freely",
            "Share your personal information on social media",
            "Use a VPN to encrypt your internet connection",
            "Disable your device's firewall"
        ],
        correctIndex: 2
    },
    {
        id: 52,
        question: "What is a DNS?",
        options: [
            "Data Network Security",
            "Domain Name System — translates domain names to IP addresses",
            "Digital Notification Service",
            "Device Networking Standard"
        ],
        correctIndex: 1
    },
    {
        id: 53,
        question: "What is an IDS?",
        options: [
            "Internet Download Service",
            "Intrusion Detection System",
            "Internal Data Storage",
            "Integrated Device Security"
        ],
        correctIndex: 1
    },
    {
        id: 54,
        question: "What is port scanning?",
        options: [
            "Scanning products at a shipping port",
            "A technique used to identify open ports and services on a target system",
            "Connecting USBs to different ports",
            "Checking monitor ports"
        ],
        correctIndex: 1
    },
    {
        id: 55,
        question: "What is a 'honeypot' in cybersecurity?",
        options: [
            "A jar of honey used as a gift for IT staff",
            "A decoy system designed to attract and detect hackers",
            "A type of antivirus software",
            "An encrypted folder"
        ],
        correctIndex: 1
    },
    {
        id: 56,
        question: "What is a MAC address?",
        options: [
            "The address of an Apple Mac computer",
            "A unique hardware identifier assigned to a network interface card",
            "A type of email address",
            "A website URL format"
        ],
        correctIndex: 1
    },
    {
        id: 57,
        question: "What is network segmentation?",
        options: [
            "Breaking a network into smaller parts to improve security and performance",
            "Connecting all devices to one network",
            "Removing security from a network",
            "Using only wireless connections"
        ],
        correctIndex: 0
    },
    {
        id: 58,
        question: "What is a packet sniffer?",
        options: [
            "A device that smells packages at the post office",
            "A tool that captures and analyzes data packets traveling over a network",
            "A type of antivirus scan",
            "A network speed test tool"
        ],
        correctIndex: 1
    },
    {
        id: 59,
        question: "What does NAT stand for in networking?",
        options: [
            "Network Address Translation",
            "New Application Technology",
            "Network Access Terminal",
            "Node Authentication Token"
        ],
        correctIndex: 0
    },
    {
        id: 60,
        question: "What is ARP spoofing?",
        options: [
            "Sending falsified ARP messages to link attacker's MAC address with a legitimate IP",
            "Creating fake Wi-Fi names",
            "Blocking internet access for all users",
            "A type of antivirus technique"
        ],
        correctIndex: 0
    },

    // ── Encryption & Protocols (61-75) ──
    {
        id: 61,
        question: "What is the primary purpose of encryption?",
        options: [
            "To speed up data transfer",
            "To convert data into a coded format to prevent unauthorized access",
            "To compress files for storage",
            "To delete sensitive information permanently"
        ],
        correctIndex: 1
    },
    {
        id: 62,
        question: "Which protocol ensures secure communication over the internet?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        correctIndex: 2
    },
    {
        id: 63,
        question: "What does SSL/TLS provide?",
        options: [
            "Faster internet speed",
            "Encrypted communication between a web browser and a server",
            "Virus protection",
            "Network load balancing"
        ],
        correctIndex: 1
    },
    {
        id: 64,
        question: "What does the padlock icon in a browser's address bar indicate?",
        options: [
            "The website is blocked",
            "The connection to the website is encrypted (uses HTTPS)",
            "The website is government-approved",
            "The website has no ads"
        ],
        correctIndex: 1
    },
    {
        id: 65,
        question: "What is symmetric encryption?",
        options: [
            "Encryption that only works on symmetric data",
            "Encryption where the same key is used to encrypt and decrypt data",
            "Encryption using two different keys",
            "Encryption that cannot be reversed"
        ],
        correctIndex: 1
    },
    {
        id: 66,
        question: "What is asymmetric encryption?",
        options: [
            "Encryption that uses a public key to encrypt and a private key to decrypt",
            "Encryption that uses the same key for both operations",
            "Encryption that only works on text files",
            "A type of compression algorithm"
        ],
        correctIndex: 0
    },
    {
        id: 67,
        question: "What is hashing?",
        options: [
            "Encrypting data with a reversible key",
            "Converting data into a fixed-size string of characters that cannot be reversed",
            "Compressing a file into a zip folder",
            "Dividing a network into smaller segments"
        ],
        correctIndex: 1
    },
    {
        id: 68,
        question: "What is end-to-end encryption?",
        options: [
            "Encrypting only the first and last parts of a message",
            "A system where only the sender and recipient can read the messages",
            "Encrypting data stored at the server end only",
            "A type of VPN protocol"
        ],
        correctIndex: 1
    },
    {
        id: 69,
        question: "What is a digital certificate?",
        options: [
            "An online diploma",
            "An electronic document used to prove ownership of a public key",
            "A digitally signed receipt",
            "A type of cryptocurrency"
        ],
        correctIndex: 1
    },
    {
        id: 70,
        question: "What is a digital signature?",
        options: [
            "A scanned image of your physical signature",
            "A cryptographic method to verify the authenticity and integrity of a message or document",
            "A signature made on a tablet",
            "An email attachment"
        ],
        correctIndex: 1
    },
    {
        id: 71,
        question: "What encryption standard is commonly used to protect Wi-Fi networks today?",
        options: [
            "WEP",
            "WPA3",
            "HTTP",
            "FTP"
        ],
        correctIndex: 1
    },
    {
        id: 72,
        question: "What is the AES encryption algorithm?",
        options: [
            "Advanced Email Security",
            "Advanced Encryption Standard — a widely used symmetric encryption algorithm",
            "Automatic Error Scanning",
            "Application Execution Service"
        ],
        correctIndex: 1
    },
    {
        id: 73,
        question: "What is a PKI (Public Key Infrastructure)?",
        options: [
            "A type of private network",
            "A framework for managing digital keys and certificates for secure communication",
            "A programming language",
            "A Physical Keyboard Interface"
        ],
        correctIndex: 1
    },
    {
        id: 74,
        question: "What is steganography?",
        options: [
            "A type of password manager",
            "The practice of hiding secret information within ordinary data like images or audio",
            "A programming technique for web development",
            "A type of firewall"
        ],
        correctIndex: 1
    },
    {
        id: 75,
        question: "What is the difference between HTTP and HTTPS?",
        options: [
            "There is no difference",
            "HTTPS is faster than HTTP",
            "HTTPS adds encryption (via SSL/TLS) to secure data in transit",
            "HTTP is more secure than HTTPS"
        ],
        correctIndex: 2
    },

    // ── Security Concepts & Best Practices (76-90) ──
    {
        id: 76,
        question: "What is the CIA Triad in cybersecurity?",
        options: [
            "Central Intelligence Agency Triad",
            "Confidentiality, Integrity, and Availability",
            "Computer, Internet, and Application",
            "Cybersecurity, Infrastructure, and Access"
        ],
        correctIndex: 1
    },
    {
        id: 77,
        question: "What does the term 'zero-day vulnerability' mean?",
        options: [
            "A vulnerability that has been patched on the same day",
            "A software flaw that is unknown to the vendor and has no available fix",
            "An attack that takes zero seconds to execute",
            "A virus that deletes all data in one day"
        ],
        correctIndex: 1
    },
    {
        id: 78,
        question: "What is the purpose of a penetration test?",
        options: [
            "To test internet speed",
            "To evaluate system security by simulating a cyber attack",
            "To install security software",
            "To back up important files"
        ],
        correctIndex: 1
    },
    {
        id: 79,
        question: "Why is it important to keep software updated?",
        options: [
            "To change the software's appearance",
            "Updates often patch security vulnerabilities and fix bugs",
            "To make the software run slower",
            "To increase the file size of the program"
        ],
        correctIndex: 1
    },
    {
        id: 80,
        question: "What is the principle of least privilege?",
        options: [
            "Giving every user administrator access",
            "Granting users only the minimum level of access necessary for their role",
            "Providing free software to all employees",
            "A method of encrypting data"
        ],
        correctIndex: 1
    },
    {
        id: 81,
        question: "What is a security audit?",
        options: [
            "Installing new software on all computers",
            "A systematic evaluation of an organization's security policies and practices",
            "Deleting old files from servers",
            "A type of malware scan"
        ],
        correctIndex: 1
    },
    {
        id: 82,
        question: "What is 'defense in depth'?",
        options: [
            "Using only one very strong security measure",
            "A security strategy using multiple layers of protection",
            "Burying servers underground for physical security",
            "A type of encryption"
        ],
        correctIndex: 1
    },
    {
        id: 83,
        question: "What is an incident response plan?",
        options: [
            "A plan to organize office events",
            "A documented set of procedures to detect, respond to, and recover from security incidents",
            "A software installation guide",
            "A network speed optimization plan"
        ],
        correctIndex: 1
    },
    {
        id: 84,
        question: "What does GDPR stand for?",
        options: [
            "General Data Protection Regulation",
            "Global Digital Privacy Rules",
            "Government Data Processing Registry",
            "General Device Protocol Regulation"
        ],
        correctIndex: 0
    },
    {
        id: 85,
        question: "What is a security patch?",
        options: [
            "A physical patch placed on a server",
            "A software update that fixes security vulnerabilities",
            "A type of firewall",
            "An antivirus subscription"
        ],
        correctIndex: 1
    },
    {
        id: 86,
        question: "What is 'ethical hacking'?",
        options: [
            "Hacking for criminal purposes",
            "Authorized testing of systems to find and fix vulnerabilities",
            "Hacking competitions for prizes",
            "Using hacking tools for personal gain"
        ],
        correctIndex: 1
    },
    {
        id: 87,
        question: "What is data classification?",
        options: [
            "Sorting data alphabetically",
            "Categorizing data based on sensitivity level to determine appropriate protection",
            "Compressing data for storage",
            "Encrypting all data equally"
        ],
        correctIndex: 1
    },
    {
        id: 88,
        question: "What does 'non-repudiation' mean?",
        options: [
            "The ability to deny sending a message",
            "A guarantee that the sender cannot deny sending a message and the recipient cannot deny receiving it",
            "The process of deleting old emails",
            "A type of virus"
        ],
        correctIndex: 1
    },
    {
        id: 89,
        question: "What is risk assessment in cybersecurity?",
        options: [
            "Guessing which systems might be attacked",
            "Systematically identifying, analyzing, and evaluating security risks",
            "Installing antivirus on all computers",
            "Backing up data weekly"
        ],
        correctIndex: 1
    },
    {
        id: 90,
        question: "What is a 'security policy'?",
        options: [
            "An insurance policy for computers",
            "A formal document outlining how an organization protects its IT assets",
            "A type of firewall rule",
            "An antivirus license"
        ],
        correctIndex: 1
    },

    // ── Advanced Topics (91-100) ──
    {
        id: 91,
        question: "What is a 'zero trust' security model?",
        options: [
            "Trusting all internal network users",
            "A model that never verifies user identity",
            "A security model that requires verification for every user and device regardless of location",
            "A firewall that blocks all traffic"
        ],
        correctIndex: 2
    },
    {
        id: 92,
        question: "What is 'threat intelligence'?",
        options: [
            "Intelligence gathered by AI robots",
            "Information about current and emerging cyber threats used to make informed security decisions",
            "A type of antivirus scan",
            "Government surveillance data"
        ],
        correctIndex: 1
    },
    {
        id: 93,
        question: "What is a SIEM system?",
        options: [
            "Simple Internet Email Management",
            "Security Information and Event Management — aggregates and analyzes security data",
            "System Integration for Enterprise Monitoring",
            "Secure Internet Encryption Module"
        ],
        correctIndex: 1
    },
    {
        id: 94,
        question: "What is 'sandboxing' in cybersecurity?",
        options: [
            "Playing in a virtual sandbox game",
            "Running untrusted programs in an isolated environment to prevent system damage",
            "Encrypting data in layers like sand",
            "Building physical barriers around servers"
        ],
        correctIndex: 1
    },
    {
        id: 95,
        question: "What is a 'supply chain attack'?",
        options: [
            "Attacking a physical supply warehouse",
            "Compromising a trusted vendor or software update to infiltrate target organizations",
            "Stealing products during shipping",
            "A type of DDoS attack"
        ],
        correctIndex: 1
    },
    {
        id: 96,
        question: "What is 'social engineering' in cybersecurity?",
        options: [
            "Building social media platforms",
            "Manipulating people into divulging confidential information or performing actions",
            "Engineering social robots",
            "A type of programming language"
        ],
        correctIndex: 1
    },
    {
        id: 97,
        question: "What is a CVE?",
        options: [
            "Certified Virus Examiner",
            "Common Vulnerabilities and Exposures — a public list of known security flaws",
            "Computer Virus Encyclopedia",
            "Cyber Validation Engine"
        ],
        correctIndex: 1
    },
    {
        id: 98,
        question: "What is multi-cloud security?",
        options: [
            "Securing multiple weather forecasting systems",
            "Protecting data and applications across multiple cloud service providers",
            "Using multiple antivirus programs",
            "A type of backup system"
        ],
        correctIndex: 1
    },
    {
        id: 99,
        question: "What is an IoT (Internet of Things) security risk?",
        options: [
            "IoT devices have no security risks",
            "Many IoT devices have weak security, making them easy targets for hackers",
            "IoT devices are only used indoors",
            "IoT devices cannot connect to the internet"
        ],
        correctIndex: 1
    },
    {
        id: 100,
        question: "What is 'cyber hygiene'?",
        options: [
            "Cleaning your computer screen regularly",
            "Routine practices and precautions to keep data and devices safe",
            "A type of antivirus software",
            "Washing your hands before using a computer"
        ],
        correctIndex: 1
    }
];

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function getRandomQuestions(count: number): QuizQuestion[] {
    return shuffleArray(allQuestions).slice(0, count);
}

export default allQuestions;
