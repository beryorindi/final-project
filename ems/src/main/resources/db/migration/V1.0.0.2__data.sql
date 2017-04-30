insert into location (id, city) values ('1', 'Bali');
insert into location (id, city) values ('2', 'Jakarta');
insert into location (id, city) values ('3', 'Yogyakarta');
insert into location (id, city) values ('4', 'Bandung');

insert into employee (id, first_name, last_name, gender, dob, nationality, marital_status, phone, email, hired_date, suspend_date, division, grade, sub_division, status, image_url, location_id)
 values (
 	'1',
    'John',
    'Cena',
    'male',
    '1985-12-2',
    'American',
    'Single',
    '628723628390',
    'john.cena@gmail.com',
    '2016-6-13',
    null,
    'CDC Asterx',
    'SE - AP',
    'Java Bootcamp',
    'Permanent',
    '../media/blank_profil.jpg',
    '1'
);
insert into employee (id,first_name, last_name, gender, dob, nationality, marital_status, phone, email, hired_date, suspend_date, division, grade, sub_division, status, image_url, location_id)
 values (
 	'2',
    'Johnny',
    'Depay',
    'male',
    '1980-5-30',
    'Australia',
    'Maried',
    '68129031389',
    'john.cena@gmail.com',
    '2015-10-7',
    null,
    'SWD Techone',
    'SE - AP',
    'Php Bootcamp',
    'Contract',
	'../media/blank_profil.jpg',
    '2'
);