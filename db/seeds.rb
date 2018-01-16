# coding: utf-8

8.times do |no|
  User.create(uid: no, name: "がちゃ太郎#{no}", gather: (10 - no) * 10)
end
