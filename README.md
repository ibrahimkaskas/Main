Yapılacaklar Listesi Uygulaması - Sunum
📌 Uygulamanın Amacı
Bu uygulama, terminal üzerinden çalışan basit bir "Yapılacaklar Listesi" yöneticisidir. Kullanıcılar:
✔ Yeni görev ekleyebilir,
✔ ID'ye göre görev silebilir,
✔ Listeyi görüntüleyebilir,
✔ Programdan çıkış yapabilir.

🚀 Nasıl Çalışır?
1️⃣ Uygulamayı Başlatma
Proje dizinine gidip komut satırından çalıştırın: npm run start 

2️⃣ Karşılama Ekranı
Program başladığında, mevcut yapılacaklar listesi gösterilir:

==== YAPILACAKLAR LİSTESİ ====
* 1: Alışveriş yap
* 2: Kod yaz

3️⃣ Yeni Görev Ekleme
Doğrudan bir metin yazıp Enter tuşuna basın:
Yapılacaklar Listesi: Spor yap

Çıktı:

* 3: Spor yap

4️⃣ Görev Silme
sil <ID> yazarak belirtilen görevi silebilirsiniz:

Yapılacaklar Listesi: sil 2
Çıktı:

Copy
* 1: Alışveriş yap
* 3: Spor yap
5️⃣ Programdan Çıkış
exit yazarak uygulamayı sonlandırabilirsiniz:

Yapılacaklar Listesi: exit
Çıktı:

Çıkış yapılıyor...
⚙️ Teknik Detaylar
✔ notlar.json dosyasına kayıt yapılır (yoksa otomatik oluşturulur).
✔ ID otomatik artar (1, 2, 3...).
✔ Hata yönetimi (try-catch) ile güvenli çalışır.

🎯 Özet
✅ Ekleme: Doğrudan yaz + Enter
✅ Silme: sil <ID>
✅ Listeleme: Otomatik gösterilir
✅ Çıkış: exit

🔹 Basit, hızlı ve kullanışlı bir terminal tabanlı görev yöneticisi! 🚀
