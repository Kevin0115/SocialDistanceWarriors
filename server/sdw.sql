create table reports (
  report_id varchar(10) not null primary key,
  status varchar(20) not null,
  reporter_id varchar(10) not null,
  ts timestamp not null,
  priority integer not null,
  location varchar(30),
  perp_name varchar(30),
  details varchar,
  evidence bytea
);

create table reporters (
  reporter_id varchar(10) not null primary key,
  name varchar(30) not null,
  phone varchar(10) not null,
  address varchar(30) not null,
  email varchar(30) not null,
  rank integer not null,
);

insert into reports values (0123456789, 'submitted', 9876543210, '2020-11-30 12:00:00', 1000, 'Vancouver, BC', 'Doon', 'Going to a rave');

insert into reporters values (9876543210, 'Doon', '6044206969', 'Langley, BC', 'email@email.com', 100);