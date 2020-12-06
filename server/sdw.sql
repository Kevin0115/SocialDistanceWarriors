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

insert into reports values (0123456789, 'submitted', 9876543210, '2020-11-30 12:00:00', 1000, 'Vancouver, BC', 'Doon', 'Going to a rave');