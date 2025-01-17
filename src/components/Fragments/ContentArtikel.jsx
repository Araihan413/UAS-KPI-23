import imgArtikel1 from '/image/image002.jpg'
import imgArtikel2 from '/image/image004.jpg'
import imgDiyah1 from '/image/diyah1.png'
import imgDiyah2 from '/image/diyah2.png'
import imgDiyah3 from '/image/diyah3.png'
import imgNadiyah1 from '/image/nadiyah1.jpg'
import imgNadiyah2 from '/image/nadiyah2.jpg'
import imgNadiyah3 from '/image/nadiyah3.jpg'

export const ContentArtikel1 = () => {
  return (
    <>
      <div className='text-justify'>
        <article className='mb-10'>
          <h1 className="font-bold text-3xl font-sekunder text-center mb-5">Disiplin Masuk Kelas</h1>
          <p className="font-sekunder">Disiplin masuk kelas merupakan kunci keberhasilan dalam pendidikan.  Kehadiran tepat waktu memungkinkan siswa untuk menyerap materi pelajaran secara maksimal dan berpartisipasi aktif dalam kegiatan belajar mengajar.  Salah satu penyebab utama ketidakdisiplinan adalah terlambat bangun pagi, yang seringkali disebabkan oleh pola tidur yang buruk dan manajemen waktu yang tidak efektif.  Kebiasaan begadang, kurangnya istirahat, dan penggunaan gadget sebelum tidur dapat mengganggu siklus tidur dan menyebabkan kesulitan bangun pagi.  Oleh karena itu, penting bagi siswa untuk menyadari pentingnya kedisiplinan dan memperbaiki pola hidup agar dapat hadir tepat waktu di kampus.  Dengan komitmen dan usaha, kedisiplinan dapat dicapai dan keberhasilan dalam belajar dapat diraih.</p>
        </article>
        <figure className='flex flex-wrap gap-2'>
          <img className='max-w-2xl w-full' src={imgArtikel1} alt="gambar foto" />
          <img className='max-w-2xl w-full' src={imgArtikel2} alt="gambar foto" />
        </figure>
      </div>
    </>
  )
}
export const ContentArtikel2 = () => {
  return (
    <>
      <div>
        <article>
          <h1 className='font-bold text-2xl font-sekunder text-center'>CULTURE SHOCK</h1>
          <h1 className='font-bold text-2xl font-sekunder text-center mb-8'>MAHASISWA ASING DI IAIN SORONG</h1>
          <div className='flex flex-col md:flex-row gap-4 mb-5'>
            <figure className='mb-8 flex-shrink-0'>
              <img className='max-w-2xl w-full md:w-48 mb-1' src={imgDiyah1} alt="foto artikel" />
              <p className='text-sm font-semibold'>Sumber : <span className='font-normal italic'>Elean</span></p>
            </figure>
            <div>
              <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span><span className="font-bold text-xl">SORONG</span> - Mahasiswa asing yang menempuh studi di IAIN Sorong mengalami fenomena yang dikenal sebagai "culture shock",culture shock adalah keterkejutan budaya saat mereka beradaptasi dengan lingkungan baru. Proses ini bisa menjadi tantangan yang signifikan, terutama ketika mereka harus berhadapan dengan perbedaan dalam norma, bahasa, dan kebiasaan sehari-hari yang berbeda dari negara asal mereka.
              </p>
              <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>
                Salah satu mahasiswa asal Papua New Guinea Eleanora Katon, mengungkapkan bahwa ia merasa terkejut dengan bagaimana cara orang-orang disekitarnya saling menghargai dan menghormati “the culture shocking is the way they respect each other and everything around then” (yang mengejutkan adalah cara mereka saling menghormati dan menghargai semua hal di sekitar mereka).
              </p>
              <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>
                Elean juga mengatakan bahwa ia merasa terkejut dengan bagaimana cara mahasiswa IAIN berpakaian, tetapi dengan seiring berjalannya waktu ia paham mengapa mahasiswa IAIN berpakaian seperti itu "I haven't seen this types of dressing in my life and that was the first time I experienced this. I used to wonder, why they dress like this because the environment is so hot aren't they feeling hot"? ("saya belum pernah melihat cara berpakaian seperti ini dalam hidup saya dan itu adalah pertama kali saya mengalami nya, saya dulu bertanya-tanya mengapa mereka berpakaian seperti ini karena lingkungan nya sangat panas, apakah mereka tidak merasa kepanasan?"). Lalu ia melanjutkan dengan mengatakan " but as times goes by I started to understand reasons why they have to cover themselves” (“tetapi dengan seiring berjalan nya waktu saya mulai memahami alasan mengapa mereka harus menutupi diri mereka") tuturnya.
              </p>
            </div>
          </div>
          <figure className='mb-8 flex-shrink-0'>
            <img className='max-w-2xl w-full mb-1' src={imgDiyah2} alt="foto artikel" />
            <p className='text-sm font-semibold'>Sumber : <span className='font-normal italic'>Elean</span></p>
          </figure>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>Selain mengalami culture shock, adaptasi sosial juga menjadi salah satu tantangan tersendiri bagi mahasiswa asing karena mereka harus menyesuaikan diri dengan cara berinteraksi dan memahami norma sosial yang berlaku di Indonesia.Tetapi Elean merasa itu bukanlah suatu hal yang sulit karena ia merasa orang-orang di sekitarnya sangat ramah "People are so friendly and I feel comfortable around them" ucapnya. Selain menceritakan tentang keramahan orang-orang disekitarnya ia juga memberitahukan bagaimana ia beradaptasi di kampus untuk mendapatkan teman " we introduce ourselves, we hangout together, do small activities together and that's how I make friends in IAIN SORONG and also outside the campus "(kami saling memperkenalkan diri, nongkrong bareng, melakukan kegiatan kecil bareng dan begitulah cara saya mendapatkan teman di IAIN SORONG dan juga diluar kampus).</p>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>Kampus IAIN Sorong berupaya menciptakan lingkungan yang mendukung bagi mahasiswa asing dengan menyediakan fasilitas yang memadai seperti Lab Bahasa. Hal ini bertujuan untuk memfasilitasi proses adaptasi mereka sehingga dapat menjalani studi dengan lebih nyaman.</p>
          <figure className='mb-8 flex-shrink-0'>
            <img className='max-w-2xl w-full mb-1' src={imgDiyah3} alt="foto artikel" />
            <p className='text-sm font-semibold'>Sumber : <a target='_blank' className='font-normal text-blue-400 hover:text-blue-600 underline' href=": https://sl.bing.net/kLcxBOuwBhs">: https://sl.bing.net/kLcxBOuwBhs</a></p>
          </figure>
        </article>
      </div>
    </>
  )
}
export const ContentArtikel3 = () => {
  return (
    <>
      <div>
        <article className='lg:px-10'>
          <h1 className='font-bold text-3xl font-sekunder text-center mb-8'>PERKEMBANGAN TEKNOLOGI AI DANDAMPAKNYA PADA PENDIDIKAN</h1>
          <h2 className='text-sm mb-4 font-bold'><span className='text-[#797979] font-normal'>Oleh</span> Nadiyah N. Faridah <span className='text-[#797979] font-normal'>| 13 Januari 2025</span></h2>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> <span className='font-bold text-xl'>Sorong </span>- Kemunculan konsep kecerdasan buatan pertama kali ditemukan setelah Perang Dunia II oleh seorang matematikawan dan filsuf muda bernama Alan Turing pada 1947. Alan turing beraggapan bahwa jika manusia bisa mengolah informasi dan memecahkan masalah juga membuat keputusan dari informasi tersebut, maka mesin juga bisa melakukannya. Dilansir dari Science in the News, dari kerangka logis tersebut Alan Turing membuat suatu makalah pada 1950 tentang bagaimana membangun mesin cerdas dan cara menguji kecerdasan mereka. Sejak saat itulah Artificial Intelligence berkembang pesat hingga sekarang.</p>

          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Artificial Intelligence terus berkembang dengan tujuan menciptakan kecerdasan yang mirip dengan manusia. Misalnya sebuah robot yang dikembangkan oleh Cynthia Breazeal bernama Kismet. Kismet dapat mengenali dan menampilkan emosi selayaknya manusia. Tidak hanya seputar robot, artificial intelligent juga melingkupi sistem otomasi mesin misalnya mobil dengan kemampuan auto pilot atau menyetir sendiri.</p>
          <figure className='mb-8'>
            <img className='max-w-2xl w-full mb-1' src={imgNadiyah1} alt="foto artikel" />
            <p className='text-sm font-bold'>Sumber: <a className='font-normal text-blue-400 hover:text-blue-600 underline' href="https://images.app.goo.gl/nVmD59oG8DTNYoYY6">https://images.app.goo.gl/nVmD59oG8DTNYoYY6</a></p>
          </figure>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Kecerdasan Buatan, atau lebih dikenal dengan singkatan AI (Artificial Intelligence), adalah salah satu bidang teknologi yang semakin berkembang dengan pesat. AI merujuk pada kemampuan mesin atau program komputer untuk meniru kecerdasan manusia dalam berbagai aspek, termasuk pengambilan keputusan, logika, pemprosesan bahasa alami, dan bahkan belajar dari pengalaman. Di berbagai bidang, AI telah membawa dampak besar, termasuk dalam dunia pendidikan (Suharmawan, 2023).</p>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>
            Perkembangan AI yang berkembang begitu cepat dalam berbagai bidang  menjadi sorot alias menjadi perbincangan hangat dikalangan generasi-generasa. Karena perkembangan AI yang begitu cepat hal ini sangat berpengaruh dalam peradaban generasi. AI telah merevolusi hampir dalam setiap aspek kehidupan manusia contohnya seperti bidang pendidikan, dalam bidang ini sudah banyak mengunakan teknologi AI seperti (Chatgpt, Gradescope, obrolan ivy, dan dalam WA pun juga sudah mengunakan vitur AI) dan memakai alat teknologi seperti (HP, laptop, tablet, computer, infocus, dan lain sebagainya).
          </p>
          <figure className='mb-8'>
            <img className='max-w-2xl w-full mb-1' src={imgNadiyah2} alt="foto artikel" />
            <p className='text-sm font-bold'>Sumber: <a target='_blank' className='font-normal text-blue-400 hover:text-blue-600 underline' href="https://images.app.goo.gl/ha4kwPaaEPpaz6sn6">https://images.app.goo.gl/ha4kwPaaEPpaz6sn6</a></p>
          </figure>
          <p className="font-sekunder mb-4">
            Marikita bahas pemanfaatan teknologi AI dan dampak dari teknologi AI.
            Beberapa pemanfaatan AI dalam bidang Pendidikan, yaitu:
          </p>
          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Pembelajaran adaptif</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Pembelajaran adaptif adalah teknik pembelajaran yang menggunakan data untuk menyesuaikan pengalaman belajar bagi setiap pendidikan. Dengan bantuan teknologi AI, data tentang cara belajar pendidikan dikumpulkan dan digunakan untuk merekomendasikan metode pembelajaran yang sesuai dengan kebutuhan masing-masing individu.</p>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Misalkan dalam lembaga pendidik yang menggunakan Google Workspace for Education, ada fitur practice sets dalam Google Classroom. Fitur ini menciptakan alur pembelajaran (learning path) yang lebih personal antara pendidik dan siswa, memungkinkan pendidik untuk memberikan feedback yang lebih individual. Meskipun fitur ini belum tersedia di Indonesia, potensinya dalam meningkatkan kualitas pembelajaran cukup signifikan.</p>

          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Penilaian Otomatis</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Secara tradisional, penilaian tugas atau ujian yang dilakukan secara manual merupakan proses yang memakan waktu. Namun, dengan munculnya sistem penilaian otomatis yang didukung oleh kecerdasan buatan AI, guru tidak perlu menghabiskan waktu untuk memeriksa hasil pekerjaan siswa. AI dapat mengevaluasi jawaban siswa secara cepat dan memberikan umpan balik dengan instan.</p>

          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Aksesibilitas dan Inklusivitas</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Keberadaan AI juga dapat membantu siswa dengan kebutuhan khusus. Contohnya adalah Parrotron, yang dapat membantu siswa dengan hambatan berbicara. Parrotron dapat memahami ucapan-ucapan yang tidak terdengar jelas akibat gangguan terhadap kemampuannya berbicara, dan mengucapkan kalimat itu kembali sehingga dapat didengarkan dan dipahami oleh orang lain. Selain itu, melalui layanan transkripsi dan terjemahan otomatis, siswa penyandang disabilitas atau mereka yang berbicara dalam berbagai bahasa dapat mengakses konten pendidikan dengan mudah.</p>

          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Asisten untuk Belajar</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Beberapa orang mungkin harus belajar beberapa hal secara mandiri, tetapi ada pula orang yang lebih senang untuk belajar bersama dan berinteraksi. AI dapat menjadi solusi untuk hal ini. AI dapat menjadi teman yang bisa mencarikanmu informasi, meresume materi, memberikan soal soal latihan, dan banyak lainnya. </p>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Implementasi AI sebagai asisten untuk pembelajaran juga sudah banyak dan menjadi produk komersial, misalnya saja ELSA Speak. Aplikasi ini menyediakan AI yang akan menjadi mentormu untuk belajar bahasa Inggris, Gemini menjadi teman untuk mencari informasi, dan Google Scholar sebagai teman mencari referensi.</p>
          <figure className='mb-8'>
            <img className='max-w-2xl w-full mb-1' src={imgNadiyah3} alt="foto artikel" />
            <p className='text-sm font-bold'>Sumber: <a target='_blank' className='font-normal text-blue-400 hover:text-blue-600 underline' href="https://images.app.goo.gl/gUjCBCwhuYqu9ARp6">https://images.app.goo.gl/gUjCBCwhuYqu9ARp6</a></p>
          </figure>
          <p className="font-sekunder mb-4">Penggunaan AI dalam pendidikan memang membawa banyak manfaat, tetapi juga dapat menimbulkan beberapa dampak yang perlu kita ketahui di antaranya berikut.</p>
          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Privasi dan Keamanan Data</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Penggunaan AI dan pengumpulan data adalah hal yang tidak dapat dipisahkan. Oleh karena itu, kita perlu memastikan bahwa data pribadi pengguna terlindungi dengan baik dari pelanggaran keamanan maupun penyalahgunaan oleh penyedia AI.</p>
          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Kesenjangan Teknologi</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Tidak semua orang atau lembaga memiliki akses yang sama terhadap teknologi. Terutama di negara seperti indonesia, penetrasi teknologi dan internet tidak merata. Penggunaan AI dapat memperbesar kesenjangan teknologi antara daerah yang memiliki sumber daya yang cukup dengan yang tidak.</p>

          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Ketergantungan pada Teknologi</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Ketergantungan yang berlebihan pada teknologi AI dapat mengurangi kemampuan siswa untuk mengembangkan keterampilan interpersonal dan keterampilan kritis dalam menyelesaikan masalah. Misalnya saja ketika diberikan pertanyaan dalam bentuk uraian, siswa malah menggunakan platform, seperti ChatGPT atau Gemini untuk menghasilkan jawabannya dan menyalin begitu saja untuk menyelesaikan tugasnya.</p>

          <h1 className='font-semibold text-2xl font-sekunder mb-2'>Kecurangan</h1>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Penggunaan AI oleh individu yang tidak bertanggung jawab dapat digunakan untuk melakukan kecurangan dalam ujian ataupun penyusunan karya. AI dapat menjadi mesin plagiasi yang baik dan dapat digunakan untuk menyalin karya orang lain tanpa ketahuan.</p>

          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span>
            AI memang telah mentransformasi kehidupan umat manusia, hampir dalam semua bidang. Bagai pedang bermata dua, AI menyimpan sebuah anugerah sekaligus juga bahaya dan kekhawatiran bagi umat manusia. Oleh karena itu, penting bagi kita semua untuk meningkatkan kesadaran akan penggunaan AI yang bijaksana, terutama dalam konteks pendidikan. Kita tidak boleh terbuai oleh kenyamanan penggunaan AI sehingga menjadi terlalu bergantung padanya dan melupakan bahwa hal itu dapat mengikis kemampuan sebagai manusia untuk berpikir kritis dan menggunakan akal.
          </p>
          <p className="font-sekunder mb-4"> <span className='w-4 inline-block'></span> Mungkin itu opini dari saya, tentang teknologi AI dengan judul perkembangan teknologi AI dan
            dampaknya pada pendidikan, semoga bermanfaat bagi yang menulis dan yang membaca.
          </p>
          <h2 className='font-semibold text-lg font-sekunder mb-2 mt-16'>Referensi: </h2>
          <p className="font-sekunder mb-4">Hakim, Faisol, Ahmad Fadlillah, and M. Nafiur Rofiq. "Artificial Intellegence (AI)
            dan Dampaknya Dalam Distorsi Pendidikan Islam. <span className='italic'> " Urwatul Wutsqo: Jurnal
              Studi Kependidikan dan Keislaman 13.1 (2024): 129-144.</span>
          </p>
          <a target='_blank' className='text-blue-400 hover:text-blue-600 underline' href="https://www.masyawi.id/artificial-intelligence-ai-pengertian-sejarah-jenis-jenis-konsep-manfaat/">https://www.masyawi.id/artificial-intelligence-ai-pengertian-sejarah-jenis-jenis-konsep-manfaat/</a>
        </article>
      </div>
    </>
  )
}
