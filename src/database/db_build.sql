BEGIN;

DROP TABLE IF EXISTS menu, categories;

CREATE TABLE categories (
    cat_id SERIAL PRIMARY KEY,
    cat_name VARCHAR(255)
);

CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    id_cat INTEGER REFERENCES categories(cat_id) ON UPDATE CASCADE,
    img_link TEXT NOT NULL
);

INSERT INTO categories(cat_name) VALUES ('Food');
INSERT INTO categories(cat_name) VALUES ('Drink');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('Biryani',45,1,'https://azcdn.rewardme.in/legacyghhblob/Production/IN/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('SHAWERMA',12,1,'http://www.my-shawarma.com/wp-content/uploads/2016/07/800X400.png');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('Steak',10,1,'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/SouthwestSteakSandwich_4CheeseSouthwest_web.jpg?itok=n3A2BJ4-');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('hamburger',20,1,'https://foremangrillrecipes.com/wp-content/uploads/2013/05/american-hamburger-foreman-grill.jpg');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('orange juice',5,2,'https://www.jessicagavin.com/wp-content/uploads/2016/03/carrot-juice-smoothie-with-turmeric-and-ginger-1200-500x375.jpg');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('Coca Cola',3.5,2,'http://starkaraokeuiuc.net/wp-content/uploads/2017/09/best-sodas-coca-cola.jpg');

INSERT INTO menu (name,price,id_cat,img_link) VALUES ('Water ',3.5,2,'https://media.wired.com/photos/59548ba638978176dacc629b/master/w_1235,c_limit/GettyImages-200218465-002_TOP-ART.jpg');

COMMIT;
