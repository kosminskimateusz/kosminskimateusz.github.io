const articles = [
  {
    id: 0,
    img: "Ayutthaya.svg",
    header: "How to get to Ayutthaya - all informations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque error quasi tempore incidunt debitis, omnis accusantium totam libero saepe, quia cumque culpa aliquid similique asperiores suscipit inventore amet vitae quis quas maiores vero necessitatibus quibusdam soluta! Distinctio vero consequuntur velit dolore blanditiis ipsa voluptatem saepe voluptate nostrum ut animi corrupti eos nobis esse non eius quibusdam, nemo vitae libero eum perferendis itaque aliquam doloremque? Quibusdam, ipsa atque autem accusantium recusandae voluptate nihil corrupti eligendi sequi cum, labore sint non magni commodi nemo deserunt, ullam quo exercitationem voluptatibus ex id. Provident, rem? Iure fuga illum natus laborum adipisci, exercitationem doloremque commodi error pariatur. Blanditiis tempora accusantium, nihil fugit voluptatum possimus. Dolore voluptate quas dolorum dolor possimus soluta aut veniam corporis, repellat minima quasi! Ut corrupti sit dolorem eligendi maxime, deserunt dolor necessitatibus molestiae excepturi quibusdam, veritatis incidunt? Quos tenetur magni delectus recusandae dicta reprehenderit doloribus quia repudiandae, ea velit libero.",
    date: "20.02.2022",
    author: "Bastian Molenda",
    tags: [
      "Travel Tips",
      "Historical"
    ]
  },
  {
    id: 1,
    img: "WatArun.svg",
    header: "Travel Guide to visiting Wat Arun (Temple of Dawn)",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam, voluptatum vel repudiandae accusantium inventore officia iure, sed molestiae doloremque exercitationem magni voluptatem cumque aspernatur. Dignissimos aspernatur numquam atque veniam excepturi consequuntur velit vitae dolorem doloribus nisi aliquid quia placeat voluptates earum, quidem, sapiente laudantium exercitationem voluptatem perferendis? Nihil minima magnam laudantium. Alias sint explicabo quia, assumenda hic pariatur aut molestiae repellendus magni ea vitae error inventore cumque eos natus molestias! Nam, quibusdam. Quaerat, error cumque? Fugiat reiciendis facere in hic sapiente distinctio, odio reprehenderit modi deleniti aspernatur temporibus ad maiores. Nulla tempore odit esse molestiae cupiditate omnis! Sed totam illum quas quam a ratione error tenetur, cupiditate nobis dolorem qui officiis illo recusandae adipisci fugiat blanditiis doloribus iste ex voluptatum excepturi voluptate corporis dolor repellat eos? Minus blanditiis nam voluptate tempore laborum totam maiores sunt veniam ut accusantium odio mollitia quas alias saepe vitae modi, sit soluta. Deserunt, tempora.",
    date: "18.02.2022",
    author: "Bastian Molenda",
    tags: [
      "Travel Tips",
      "Historical"
    ]
  },
  {
    id: 2,
    img: "Pattaya.svg",
    header: "Night Life in Pattaya - what to do to survive",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit doloremque mollitia illum blanditiis laborum maxime consectetur accusantium? Illum itaque numquam suscipit praesentium atque possimus harum totam non, voluptatibus maxime eos! Consequuntur exercitationem est alias? Illum laborum voluptatibus molestiae, hic esse, mollitia deleniti quos odio est voluptas ipsa harum nihil facilis! Minima sit non placeat doloribus, quidem modi optio voluptatibus qui cum magnam exercitationem distinctio consequatur eius numquam commodi nemo, ducimus inventore neque quos cumque officia reprehenderit impedit dolorem? Porro pariatur voluptatum optio. Vel dolorem reiciendis veritatis et dicta! Vitae, itaque inventore illum distinctio adipisci nihil hic quas ducimus sunt excepturi? Ut iste numquam itaque minus impedit voluptatibus ipsam beatae totam laboriosam. Quae ducimus mollitia saepe optio voluptatem, accusantium quasi unde nihil voluptatibus quidem officia natus rem tenetur ipsa earum sit vel! Possimus placeat explicabo quae voluptatum quidem, voluptates, illum beatae, facere atque praesentium fuga ab. Doloribus reiciendis qui excepturi nesciunt.",
    date: "11.02.2022",
    author: "Szymon Kwiatkowski",
    tags: [
      "Travel Tips",
      "Party"
    ]
  },
  {
    id: 3,
    img: "Menam.svg",
    header: "Everything about Menam",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quae ducimus tempora delectus excepturi impedit porro dolorem repellendus sint reiciendis harum distinctio voluptate officiis corporis quas, doloremque consequatur suscipit dolor vero quaerat, ratione temporibus! Hic reprehenderit voluptates itaque in ut. Optio veritatis eligendi dolore corrupti. Natus, commodi numquam officia labore cum minima, ipsa error doloremque eligendi modi quibusdam assumenda quasi eaque, ullam nesciunt! Voluptatum, ea minus! Suscipit, aperiam, labore doloribus odio quo id nobis explicabo rerum in beatae mollitia! Explicabo libero saepe eveniet sequi ipsam. Non assumenda vel placeat debitis quisquam a libero voluptates. Itaque rem mollitia dolor, quae adipisci omnis repudiandae quam esse similique facilis aliquid eveniet consequatur corporis voluptates blanditiis consectetur earum molestias cumque cupiditate? Culpa, vel eius architecto, velit illum nisi aspernatur, distinctio possimus sint sequi aliquam. Vel iure exercitationem aspernatur tempora blanditiis dignissimos, officia praesentium, harum similique neque quo quis molestias. Possimus ex praesentium maxime suscipit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quae ducimus tempora delectus excepturi impedit porro dolorem repellendus sint reiciendis harum distinctio voluptate officiis corporis quas, doloremque consequatur suscipit dolor vero quaerat, ratione temporibus! Hic reprehenderit voluptates itaque in ut. Optio veritatis eligendi dolore corrupti. Natus, commodi numquam officia labore cum minima, ipsa error doloremque eligendi modi quibusdam assumenda quasi eaque, ullam nesciunt! Voluptatum, ea minus! Suscipit, aperiam, labore doloribus odio quo id nobis explicabo rerum in beatae mollitia! Explicabo libero saepe eveniet sequi ipsam. Non assumenda vel placeat debitis quisquam a libero voluptates. Itaque rem mollitia dolor, quae adipisci omnis repudiandae quam esse similique facilis aliquid eveniet consequatur corporis voluptates blanditiis consectetur earum molestias cumque cupiditate? Culpa, vel eius architecto, velit illum nisi aspernatur, distinctio possimus sint sequi aliquam. Vel iure exercitationem aspernatur tempora blanditiis dignissimos, officia praesentium, harum similique neque quo quis molestias. Possimus ex praesentium maxime suscipit!",
    date: "3.02.2022",
    author: "Bastian Molenda & Dawid Pioś",
    tags: [
      "Information",
      "Fun Fact"
    ]
  },
  {
    id: 4,
    img: "BurmaRailway.svg",
    header: "The Burma Railway, also known as the Death Railway",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, est repellat? Accusamus excepturi consectetur velit. Earum hic unde nam! Amet recusandae similique quidem exercitationem ad error libero, minima quis expedita voluptatum dicta. Minus sunt labore at facilis dolor, sint fugit consequuntur modi expedita veniam voluptatem dignissimos dolorum recusandae provident a impedit deserunt autem, praesentium ut sapiente molestiae! At sequi ratione veritatis quod voluptatibus tenetur sint commodi a consectetur praesentium, culpa eum consequatur voluptatum tempore nostrum, accusantium reiciendis dicta aliquid voluptatem amet eos saepe? Molestias architecto voluptas commodi suscipit reprehenderit cumque, iste cum quo eaque tempore ut quos ab, animi optio odio at accusamus incidunt! Dicta amet provident tempore voluptas ipsum quasi nesciunt cupiditate cumque nulla, tenetur ratione consectetur voluptate aperiam et ea harum labore. Tempora nisi esse vitae, iure ipsa quae autem magnam, nulla laboriosam eos ducimus soluta. Doloremque consequuntur tenetur cumque veniam, cum eum illum quisquam eveniet iusto possimus?",
    date: "25.01.2022",
    author: "Bastian Molenda",
    tags: [
      "Information",
      "Historical"
    ]
  },
  {
    id: 5,
    img: "Covid.svg",
    header: "How tight travel restricions in Covid hit Thailand tourism?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur debitis tempore veritatis commodi dolore eum nulla dolorum est, et temporibus, recusandae obcaecati reprehenderit, porro error! Aliquid temporibus eveniet maxime magni molestiae illum unde rem non inventore minus! Exercitationem, alias! Officia dolores, mollitia voluptatem ducimus praesentium neque. Repellat voluptatem illo veritatis ad unde minima, maxime voluptate. Magni vel eveniet voluptatibus! Ipsum, ipsam expedita corporis sint deserunt beatae architecto quibusdam pariatur hic labore omnis iste fugit mollitia, distinctio nobis tempore? Repudiandae aliquam nulla consequuntur tempora vero obcaecati voluptate maiores, quidem officiis fugit, natus ipsa autem possimus modi tenetur odit cumque enim atque sint est blanditiis. Aliquam sed vitae repellat mollitia reiciendis, architecto iusto, corporis est eius possimus ratione voluptatem perspiciatis quasi dolorem nihil quo facilis recusandae repudiandae. Quas nobis repellendus, commodi qui dolore cupiditate impedit dolorem. Exercitationem adipisci, nostrum dolor odit architecto dignissimos illo natus vero minima voluptas vitae deserunt eaque?",
    date: "18.01.2022",
    author: "Szymon Kwiatkowski & Mateusz Kośmiński",
    tags: [
      "Information",
      "Covid"
    ]
  }
];
const DOMArticles = document.querySelector('.articles');
const max_short_description_size = 300;

const refresh_articles = articles.forEach((el) => {
  // Add img with button
  const article_img = document.createElement('img');
  article_img.classList.add('article-img');
  article_img.alt = el.header;
  // article_img.classList.add('article-img-slide');


  article_img.src = `./images/${el.img}`;

  const read_more = document.createElement('button');
  read_more.classList.add('read-more-button');
  // read_more.classList.add('disapeared');
  read_more.innerText = "Read more";

  const article_logo = document.createElement('figure');
  article_logo.classList.add('article-img');
  article_logo.appendChild(article_img);
  article_logo.appendChild(read_more);

  // Add Short article content

  const header = document.createElement('h2');
  header.classList.add('article-header');
  header.innerText = el.header;


  const description = document.createElement('p');
  description.classList.add('article-description');
  const short_description = el.description.substring(0, max_short_description_size) + '...';
  description.innerText = short_description;

  const date = document.createElement('div');
  date.classList.add('date');
  date.innerText = el.date;

  const author = document.createElement('div');
  author.classList.add('author');
  author.innerText = el.author;

  const info = document.createElement('div');
  info.classList.add('info');
  info.appendChild(date);
  info.appendChild(author);

  const tags = document.createElement('div');
  tags.classList.add('tags');

  el.tags.forEach((element) => {
    const tag = document.createElement('p');
    tag.innerText = element;
    tags.appendChild(tag);
  })

  const article_footer = document.createElement('div');
  article_footer.classList.add('article-footer');
  article_footer.appendChild(info);
  article_footer.appendChild(tags);

  const short_article_content = document.createElement('div');
  short_article_content.classList.add('article-content');
  short_article_content.appendChild(header);
  short_article_content.appendChild(description);
  short_article_content.appendChild(article_footer);


  // Create article
  const article = document.createElement('article');
  article.classList.add('short-article');
  // article.classList.add('full-article');

  // test


  article.appendChild(article_logo);
  article.appendChild(short_article_content);
  DOMArticles.appendChild(article);
})


const read_more_buttons = document.querySelectorAll('.read-more-button');

read_more_buttons.forEach((button, id) => {
  button.addEventListener('click', () => {
    button.classList.add('disapeared');
    button.parentElement.classList.add('article-img-slide')
    console.log('ok');
    const article_img = button.parentElement.querySelector('.article-img');
    const article_description = button.parentElement.parentElement.querySelector('.article-content').querySelector('.article-description');

    // article_description.innerHTML = `<p class="article-description-full">${articles[id].description}</p>`;

    read_more_buttons.forEach((butt, number) => {
      if (id !== number) {
        butt.classList.remove('disapeared');
        butt.classList.add('show');
        const current_article_img = butt.parentElement.querySelector('.article-img');

        const current_article_description = butt.parentElement.parentElement.querySelector('.article-content').querySelector('.article-description');
        current_article_description.parentElement.classList.remove('slide-down');
        current_article_description.parentElement.classList.add('slide-up');

        current_article_img.style.transition = `transform 1s`;
        current_article_img.style.transform = `translateY(calc(0px))`;
        shortTextLoad(current_article_description, articles[number].description);
      } else {
        butt.classList.remove('show');
        moreTextLoad(article_description, articles[id].description);
        const article_height = button.parentElement.parentElement.querySelector('.article-content').querySelector('.article-description-full').clientHeight;
        article_img.style.transition = `transform 1s`;
        article_img.style.transform = `translateY(calc(${(article_height) / 2}px))`;
        console.log(article_height / 2);
        console.log(article_description.clientHeight);

        article_description.parentElement.classList.remove('slide-up');
        article_description.parentElement.classList.add('slide-down');
      }
    })



  })
});

// function moreTextLoad(article_description, full_text) {
//   for (let i = max_short_description_size; i < full_text.length; i++) {
//     setTimeout(function() {

//       let text = full_text.substring(0, i + 1);
//       if (text.length !== full_text.length) {
//         text += '...';
//       }
//       // console.log('text length', text.length, 'full text length', full_text.length);
//       // console.log(text);



//       article_description.innerHTML = `<p class="article-description-full"></p>`;
//       article_description.firstChild.innerHTML = text;
//       // console.log(text);
//     }, 300);

//   }
// }


function moreTextLoad(article_description, full_text) {

  const loadText = async () => {
    for (let i = max_short_description_size; i < full_text.length; i++) {
      let text = full_text.substring(0, i + 1);

      if (text.length !== full_text.length) {
        text += '...';
      }

      const signsToAppend = 20;

      if (i % signsToAppend === 0) {
        article_description.innerHTML = `<p class="article-description-full"></p>`;
        article_description.firstChild.innerHTML = text;
        await sleep(10);
        // console.log(i, i%100);
      } else if (i === text.length - 1) {
        article_description.firstChild.innerHTML = text;
      }

      // console.log(text);

    }
  }
  loadText();
}

function shortTextLoad(article_description, full_text) {
  const splitText = async () => {
    for (let i = full_text.length; i > max_short_description_size; i--) {
      let text = full_text.substring(0, i + 1);

      if (text.length !== full_text.length) {
        text += '...';
      }

      const signsToAppend = 20;

      if (i % signsToAppend === 0) {
        article_description.innerHTML = `<p class="article-description-full"></p>`;
        article_description.firstChild.innerHTML = text;
        // await sleep(10);
        // console.log(i, i%100);
      } else if (i === text.length - 1) {
        article_description.firstChild.innerHTML = text;
      }
      // console.log(text);
    }
  }
  splitText();
}

const sleep = (miliseconds) => {
  return new Promise(resolve => setTimeout(resolve, miliseconds))
}