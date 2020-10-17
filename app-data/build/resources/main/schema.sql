create table if not exists Task
(
    id        serial primary key,
    name      varchar(50)   not null,
    string    varchar(1000) not null,
    created_at timestamp     not null
);
