document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menuIcon');
    const navList = document.querySelector('.nav-list');
const addPostButton = document.getElementById('addPostButton');
    const addPostModal = document.getElementById('addPostModal');
    const closeModal = document.getElementById('closeModal');
    const addPostForm = document.getElementById('addPostForm');
    const postsContainer = document.getElementById('posts-container');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });



    addPostButton.addEventListener('click', () => {
        addPostModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        addPostModal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == addPostModal) {
            addPostModal.style.display = 'none';
        }
    };

    addPostForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const type = document.getElementById('postType').value;
        const image = document.getElementById('postImage').files[0];

        const reader = new FileReader();
        reader.onload = function (e) {
            addPost(title, content, type, e.target.result);
        };
        if (image) {
            reader.readAsDataURL(image);
        } else {
            addPost(title, content, type, null);
        }
        
        addPostModal.style.display = 'none';
        addPostForm.reset();
    });

    function addPost(title, content, type, imageSrc) {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.classList.add(type);

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        const previewContent = content.length > 150 ? content.substring(0, 150) + '...' : content;
        postContent.textContent = previewContent;

        const seeMore = document.createElement('button');
        seeMore.textContent = 'See More';
        seeMore.addEventListener('click', () => {
            openNewPage(title, content);
        });

        postCard.appendChild(postTitle);

        if (imageSrc) {
            const postImage = document.createElement('img');
            postImage.src = imageSrc;
            postCard.appendChild(postImage);
        }

        postCard.appendChild(postContent);
        postCard.appendChild(seeMore);
        postsContainer.appendChild(postCard);
    }

    function openNewPage(title, content) {
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>' + title + '</title><style>body { font-family: Arial, sans-serif; padding: 20px; }</style></head><body>');
        newWindow.document.write('<h1>' + title + '</h1>');
        newWindow.document.write('<p>' + content.replace(/\n/g, '<br>') + '</p>');
        newWindow.document.write('<a href="index.html">Go Back</a>');
        newWindow.document.write('</body></html>');
        newWindow.document.close();
    }

    window.filterBlogs = function (type) {
        const posts = document.querySelectorAll('.post-card');
        posts.forEach(post => {
            if (type === 'all' || post.classList.contains(type)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    };

    // Add initial blog posts
    const blogs = [
        {
            title: 'The Future of Artificial Intelligence: Transforming Industries',
            content: 'In recent years, artificial intelligence (AI) has made remarkable strides, revolutionizing various industries. From healthcare to finance, AI-powered solutions are enhancing efficiency, accuracy, and decision-making processes. This blog explores the transformative potential of AI across different sectors and discusses its implications for the future.',
            type: 'tech',
            image: 'https://media.licdn.com/dms/image/D4D12AQExQrhlNjo8ZQ/article-cover_image-shrink_600_2000/0/1684909246745?e=2147483647&v=beta&t=SPhsj51S12vRZ48Y2tx0GRaph7WRX5TyVWH91HlRPVc'
        },
        {
            title: 'Cybersecurity Threats in the Digital Age',
            content: 'With the rapid digitization of our world, cybersecurity has become a pressing concern for individuals and organizations alike. This article delves into the evolving landscape of cyber threats, ranging from ransomware attacks to data breaches, and offers insights into best practices for protecting against these vulnerabilities.',
            type: 'tech',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5Xsr1ccR_559XTENrqWvB4gqG5HHnDzkyw&s'
        },
        {
            title: 'The Rise of Remote Work: Navigating the New Normal',
            content: 'The COVID-19 pandemic accelerated the adoption of remote work, prompting a seismic shift in how we approach work and productivity. This piece examines the benefits and challenges of remote work, explores emerging trends in digital collaboration tools, and offers practical tips for maintaining work-life balance in a remote environment.',
            type: 'tech',
            image: 'https://images.pexels.com/photos/4392993/pexels-photo-4392993.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1'
        },
        {
            title: ' Standing in Solidarity: Free Palestine',
            content: `In recent years, the call for a Free Palestine has reverberated across the globe, igniting passionate debates, protests, and advocacy efforts in support of Palestinian rights and self-determination. From grassroots activists to international diplomats, voices from all corners of the world have joined together to condemn the injustices faced by the Palestinian people and demand an end to the Israeli occupation of Palestinian territories.
            At the heart of the Free Palestine movement lies a fundamental belief in human rights, justice, and equality for all. For decades, Palestinians have endured systemic discrimination, violence, and displacement, as their land has been annexed, their homes demolished, and their basic freedoms restricted under Israeli military rule. The ongoing blockade of Gaza, the expansion of illegal settlements in the West Bank, and the construction of the separation wall have only exacerbated the humanitarian crisis facing Palestinians, deepening their sense of dispossession and despair.
            Despite the formidable challenges they face, Palestinians have shown remarkable resilience and steadfastness in their quest for freedom and dignity. From the Great March of Return to the Boycott, Divestment, and Sanctions (BDS) movement, Palestinians have employed a variety of nonviolent tactics to resist oppression and amplify their demands for justice on the global stage. Their struggle for liberation resonates deeply with people around the world who share a commitment to upholding universal principles of human rights and international law.
            
            The Free Palestine movement is not merely a political issue; it is a moral imperative that calls upon us to confront injustice and stand in solidarity with the oppressed. As individuals, communities, and nations, we have a responsibility to speak out against apartheid, colonization, and occupation wherever they occur and to work towards a future where all people, regardless of their ethnicity, religion, or nationality, can live in freedom, dignity, and peace.
            
            In the face of entrenched power structures and entrenched interests, the road to a Free Palestine may seem long and arduous. However, history has shown us that justice and liberation are achievable when people come together in solidarity, persistence, and determination. By amplifying Palestinian voices, advocating for accountability, and supporting grassroots movements for change, we can help pave the way towards a future where Palestinians can finally realize their aspirations for statehood, sovereignty, and self-determination.
            
            In the words of Nelson Mandela, "We know too well that our freedom is incomplete without the freedom of the Palestinians." It is time for the world to heed the call for a Free Palestine and to work towards a just and lasting peace that honors the rights and aspirations of all people in the region.`,
            type: 'politics',
            image: 'https://images.pexels.com/photos/11556007/pexels-photo-11556007.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'The Role of Social Media in Modern Political Campaigns',
            content: 'In an era dominated by social media, political campaigns have embraced digital platforms as powerful tools for mobilization, advocacy, and voter engagement. This article analyzes the impact of social media on political discourse, examines the role of algorithms and targeted advertising in shaping public opinion, and discusses the implications for democracy and civic engagement.',
            type: 'politics',
            image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Globalization and Geopolitics: Navigating a Complex Landscape',
            content: 'In an increasingly interconnected world, geopolitical dynamics are undergoing rapid transformation, fueled by economic interdependence, technological innovation, and shifting power dynamics. This piece explores the implications of globalization on international relations, examines emerging geopolitical hotspots, and discusses strategies for promoting stability and cooperation in a multipolar world.',
            type: 'politics',
            image: 'https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'The Evolution of Esports: From Niche Hobby to Global Phenomenon',
            content: 'Esports has emerged as a cultural phenomenon, captivating millions of fans worldwide and challenging traditional notions of sports entertainment. This blog traces the rise of esports, explores the competitive landscape of popular games like League of Legends and Fortnite, and discusses the future of competitive gaming as a mainstream spectator sport.',
            type: 'sport',
            image: 'https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Athlete Mental Health: Breaking the Stigma',
            content: 'The pressure to perform at the highest level, coupled with intense scrutiny from fans and media, can take a toll on the mental health of athletes. This article shines a spotlight on the issue of athlete mental health, examines the barriers to seeking help and support, and advocates for destigmatizing mental health struggles in the world of sports.',
            type: 'sport',
            image: 'https://media.istockphoto.com/id/1352666059/photo/active-young-asian-man-exercising-at-home-using-fitness-tracker-app-on-smartwatch-to-monitor.jpg?b=1&s=612x612&w=0&k=20&c=A3sPwSEhyoBT1VXg-xchdUEk0kFrX-p_5gbhQWu12ok='
        },
        {
            title: 'The Power of Sports Diplomacy: Building Bridges Through Athletics',
            content: 'Sports have long served as a powerful tool for diplomacy, fostering goodwill, cultural exchange, and cooperation between nations. This piece explores the role of sports diplomacy in promoting peace and understanding on the international stage, highlights notable examples of sports diplomacy initiatives, and discusses the potential for sports to transcend political and cultural divides.',
            type: 'sport',
            image: 'https://images.pexels.com/photos/598670/pexels-photo-598670.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Sustainable Travel: Exploring the World Responsibly',
            content: 'As global tourism continues to grow, so too does the importance of sustainable travel practices. This blog provides eco-conscious travelers with tips and insights for minimizing their environmental footprint, supporting local communities, and preserving natural and cultural heritage sites for future generations.',
            type: 'travel',
            image: 'https://images.pexels.com/photos/14433321/pexels-photo-14433321.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Off the Beaten Path: Discovering Hidden Gems Around the World',
            content: 'While popular tourist destinations have their allure, there\'s something special about exploring off-the-beaten-path destinations that offer authentic experiences and unique cultural insights. This article highlights lesser-known travel destinations, from remote islands to quaint villages, and encourages readers to embrace adventure and spontaneity in their travels.',
            type: 'travel',
            image: 'https://images.pexels.com/photos/24778773/pexels-photo-24778773/free-photo-of-steam-over-barren-hills.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'The Joys of Solo Travel: Embracing Independence and Discovery',
            content: 'Solo travel offers unparalleled opportunities for self-discovery, personal growth, and cultural immersion. This piece celebrates the joys of solo travel, shares practical tips for solo adventurers, and explores the transformative power of embarking on a journey alone, whether it\'s backpacking through Southeast Asia or embarking on a solo road trip across America.',
            type: 'travel',
            image: 'https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Mindful Living: Cultivating Balance and Well-Being',
            content: 'In today\'s fast-paced world, prioritizing mental and physical well-being is essential for leading a fulfilling life. This blog delves into the principles of mindful living, from practicing mindfulness meditation to embracing minimalist living, and offers practical strategies for reducing stress, increasing resilience, and finding joy in the present moment.',
            type: 'lifestyle',
            image: 'https://images.pexels.com/photos/5302864/pexels-photo-5302864.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'The Art of Slow Living: Embracing Simplicity and Slowing Down',
            content: 'In a culture obsessed with productivity and busyness, the concept of slow living offers a refreshing alternative—a way of life centered around intentionality, presence, and savoring life\'s simple pleasures. This article explores the philosophy of slow living, shares tips for incorporating slow living practices into daily life, and celebrates the beauty of living mindfully and authentically.',
            type: 'lifestyle',
            image: 'https://images.pexels.com/photos/6941672/pexels-photo-6941672.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Digital Detox: Unplugging for Health and Happiness',
            content: 'Constant connectivity has its benefits, but it also comes with drawbacks, including digital overload and information overwhelm. This piece advocates for the importance of unplugging from screens and technology, explores the benefits of digital detoxing for mental health and well-being, and offers practical strategies for cultivating a healthier relationship with technology in the digital age.',
            type: 'lifestyle',
            image: 'https://images.pexels.com/photos/11592804/pexels-photo-11592804.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    blogs.forEach(blog => addPost(blog.title, blog.content, blog.type, blog.image));
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Send form data using Fetch API
    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Display success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'inline';
        
        // Clear form fields
        this.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
      } else {
        // Handle the error (optional)
        alert('There was a problem submitting the form.');
      }
    }).catch(error => {
      // Handle the error (optional)
      alert('There was a problem submitting the form.');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Existing code...

    const toggleThemeButton = document.getElementById('toggleThemeButton');
    const themeStylesheet = document.getElementById('themeStylesheet');

    toggleThemeButton.addEventListener('click', () => {
        if (themeStylesheet.getAttribute('href') === 'style.css') {
            themeStylesheet.setAttribute('href', 'darker.css');
        } else {
            themeStylesheet.setAttribute('href', 'style.css');
        }
    });
});
