import React, { useState } from 'react';
import {Button, Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal, ImageBackground } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import FormList from '../components/FormList';

export default function MainPage({navigation}) {
    const [news, setNews] = useState([
        {name: 'Чем занят наш мозг, пока мы спим',
        anons: 'И почему не стоит пренебрегать сном',
         full: 'Пока вы спите, мозг работает. Одна из причин, почему не стоит пренебрегать сном, заключается в том, что в период сна ваш мозг обрабатывает всю полученную за день информацию. Он раскладывает ее по полочкам и делает так, чтобы ненужные данные отсеивалась, а важные закреплялась в памяти. Рассказываем, что делает наш мозг во время сна и как это связано с обучением.В 1928 году немецкий ученый Ганс Бергер впервые получил запись электрической активности мозга человека — электроэнцефалограмму (ЭЭГ). Так, он доказал, что кора головного мозга занята активностями. Кроме того, ученые наблюдали волны с высокоамплитудными колебаниями частотой 0,5–4 Гц, которые потом назвали медленными, а фаза сна стала медленно-волновым сн. Медленный состоит из четырех этапов:Первая стадия проходит между бодрствованием и засыпания.  На второй отмечается «легкий» сон, когда частота пульса и дыхания регулируются, температура тела падТретья и четвертая стадии — глубокий Фазы быстрого сна составляют 20–25% времени ночного сна, одна фаза длится 10–20 минут и чередуется с фазой медленного сна. Так, цикл в среднем повторяется 4–5 раз. Раньше считалось, что REM-сон важен для обучения и памяти. Однако новые исследования свидетельствуют о том, что не-REM-сон важнее для укрепления памяти и обработки полученной информации. Также эта фаза является более спокойной.',
          key: '1',
           img: 'https://img.freepik.com/free-vector/self-confidenceconcept-illustration_114360-6475.jpg?w=740&t=st=1716556956~exp=1716557556~hmac=24196252ad4de1392cff2edca68629d2b65c5acce961ca402bd1629475f72f17'},
           
           {name: 'Ноль мотивации',
           anons: 'Как не перегореть на учебе?', 
           full: 'Чувствуете себя менее мотивированным, чем обычно? Более измученным и раздраженным? Учеба вызывает все меньше вдохновения и все больше желания «бросить все»? У вас может быть академическое выгорание, которое является вполне реальным заболеванием, а значит, поддается диагностике и лечению, если все делать правильно. Разбираемся в симптомах и причинах и рассказываем, что делать, чтобы не перегореть на учебе. Академическое выгорание можно определить как негативную эмоциональную, физическую и умственную реакцию на длительное обучение, которая приводит к истощению, разочарованию, отсутствию мотивации и снижению результатов. Это своего рода отрицательная кульминация многих недель или месяцев изучения одного и того же материала, или работы над одним и тем же проектом, или непрерывных лет обучения. Его не следует путать с однократным упадком сил, когда вы занимаетесь часами напролет, или с усталостью от бессонницы..Академическое выгорание — это хроническое заболевание, явление, когда человек не может сосредоточиться на учебе, постоянно отвлекается и не интересуется своими задачами. Для более глубокого объяснения феномена выгорания исследователи разделили его на три характерных состояния:постоянные и безрезультатные попытки сконцентрироваться.отчуждение от учебы.полная невозможность изучить тему или выполнить поставленную задачу.Симптомы академического выгорания проявляются не только в усталости и ощущении, что вы не можете заставить себя пойти на очередное занятие. Выгорание может вызвать настоящие психосоматические проблемы, такие как головные боли, бессонница и депрессия. Поэтому, как только вы распознаете симптомы, важно тут же начинать принимать меры, чтобы обратить состояние вспять. К симптомам академического выгорания относятся:чувство истощения независимо от того, сколько вы спите, что приводит к усталости и бессоннице.отсутствие мотивации посещать занятия или начинать выполнение заданий.повышенная раздражительность.утрата уверенности в своих академических способностях.неспособность уложиться в важные сроки.напряжение в теле, которое может проявляться в виде головных болей, болезненных ощущений в мышцах или напряжении челюсти.более высокая частота заболеваний из-за непроходящего стресса и истощения.увеличение количества вредных привычек, таких как переедание, слишком поздний отход ко сну, кусание ногтей или любых других привычек, которые вы склонны приобретать, когда испытываете стресс или не заботитесь о себе.неспособность сосредоточиться на учебной работе.чувство скуки или отсутствие интереса к тем аспектам учебы или досуга, которые вам раньше нравились.тревожность или депрессия.', 
           key: '2', 
           img: 'https://dzen.ru/lz5XeGt8f/9iuge7219/18b1a4tBFtUL/zQYzrm09uXCysQYX_mMXWWJ8ZV-j7ora4MxhaCd6XZlDPCsVl3-ICIy5sbDQAt6_WHI3QaOAPOuZeoq-lcf0X93Sol5JzYgFNsPHkv-jF-mSjEFK8mqbu1WsBSmTWk1apllP0FJand36KTHQ4fAsHWmVcfMw8v78fhr7e5CzdSurUTNe7A3ZYIOBUDdNswUpg-7kbOddyV8Rz0JcxJmsW5HNq1HgiK1cCOyVVGSyTK-I1GCAQEBd7N5riLlw1ucKamJXDT7_6SGCAJP23tA1meC-tG-l7Wv8Ql7SrffLrhgwH_pSIEkcbMk9hdTnky-N6QUyEQGwj8xeWNuZUwd0eZuCZjzsboihg6JQBt0A1_tCv4bt988rTFDc02-26M9ogZ3IMMIrzb3JTtXG5ACO72nmAkKykq-8v_pJ6VP3hCu5gNVMr27oUhCRoaXegGSZAa6WrYWsm72x_QBeFKuOOcENSkMRyk__mU1U5tQxTN9ol5CxEnLP7myIaijCJaVbyPB3LU1euwIT4ZN2vYG3SXJutBwlHQsPMtxA34YILeoDHaoRcMgsnprvRXc2Ir2eaPXCMJNBHqxuezhLMPcGKeggFw49XtsAU3NwRx1CNclyXBQ_hY3Z3jBPkR_WOE1JoP65MsMKn07JPVSE1_OPLim1ktKxQgwffAjIqlAGlBgKwtbPD29Yc8CAUDa_4bTpwly0HUacu71yzhEd5LstmGPOm8Dg2R1fW_xkJtQzf31Kp5DBc4Hvj3yp2mqRdcaZ6NH0Le4cuKJSsmGVLkDXqIPORqzkL2r88YywfiV6PFrh36kCAEuv7ctPdsenok8d6Sew8ENCrq-O2EhZAIbGKOpgRRyuHqsggXOR5y1yxfqx31Rvd96avOP8Yz_F6J1Jo6x5ExBK3k1av4fEdaGtzPnGMYBhwy3unAvoamHVtov78aUcDD7YEgPhYcVvctepEw8mzpWumx1AXUMcBnldWnBfmdICSa_uO0wF9yVyvr2K9GCCk5N8TD2ZuZnT9QR4evAnr3zNiGBhEUNn_EHHKVJMRT93bZkMUo4RvpfozRkSXZmzc1uenpjvZbSlot0NihUxc9DQPm7N6arLokXnWcjyJ87_b-qCM7ABx32AV2rBDWUPBk3oLIDMAkwnyj-4kDxYYABLzU4p7GX1ZIFvLBtFYNKDEBzt7Dro-kH3h0hLw2bc3m0ZUaABQkeuYFTqggzWLTd_eR6S7NL_ZMuP-bLfS2Owqm19-LykpqZjfoxZl9NBUqNd_dx7Orqi5aWJi6GmTi7d2WIDoyFXDREn6JPuRewXLeotgdzAXaQKrNvDDZpDcMoenrke5HUHs3y9yQTxIXLSjq1Oyov501THCrmCtA9cvyji4TKiRJ7TNuiwPPUtx5wr3pBuoQyXSy4Iw-4r0cILDZzKfzSFNmB8T4t3QhLzoTzeT7p4m-H3twg5gtUM_d8IQaDQIkUtADXrEt2nXDdM-z2QX1L8hHlvCoIea_LgGD9tCU-kdERw_w5pZSER08AMLv3ICkvy9oSqu4CW3S9cKQBxMpBnLpLmKeM_lW6XXci9A_0Cb1fZb5gxPXlhAyifz_mdFuaWs36eCvYBcOODz69sqziYoVQ3i-jSFn7MLMjgA1EiRs9zFClBnjU-NUzqDwD-80w2SC7bMF6rQwEqHX_qXzd3xLG_Tzj2Q0FxsK3cHIkqK6LVZWrosDc9fw_7QJGBMAaf85dqYi2FPyRcCrwBvyN8t1jtifNeCXLz6P2N2I70NQQgzS4Z5UNhkKKf7K_JyFqQx4bYGIB0XO7s-zLj8rBVzvP2q9JcZG4Xnck9cZ9AvcQI7msTjnsSwCgsTWludhemcR7tCZWjQJFCTR3dW-opcIdGu4swd5ye3xqikBGT968jp_mgfVXuxb973uCPMA-1-C5749yLgBCazVzIzNVUt9P8nlmnQpMjYe7O_siIWuPFREg6QkTP329oYpMSg'},
           

        {name: 'Что такое адаптивный интеллект и как его развивать', anons: 'Всегда выбирайте неизвестное', 
        full: 'Мы принимаем лучшие решения, когда задействуем наше сердце, творчество и анализ и, наконец, наше мужество и мотивацию. Я называю это путь адаптивного интеллекта (AIP), — объясняет концепцию адаптивного интеллекта генеральный директор и основатель американской компании Adaptive Intelligence Consulting Гари Култон. Он является одним из евангелистов идеи адаптивного интеллекта. Коротко эксперт определяет AIP как искусство и науку мышления, указывая на то, что это понятие объединяет сразу несколько типов мышления. Гари Култон уверен в том, что человек совмещает в себе эмоциональный интеллект (EQ), ментальный (IQ) и позитивный (PQ). Ментальный интеллект отвечает за рациональное мышление, эмоциональный интеллект позволяет распознавать свои эмоции и управлять ими, позитивный интеллект отвечает за положительный настрой и уверенность в собственный силах. Адаптивный интеллект совмещает в себе черты первых трех понятий, используя эти навыки для быстрой и комфортной адаптации к новым условиям. Адаптивный интеллект позволяет вам мгновенно принять верное решение благодаря совмещению навыков, которые мы развиваем благодаря эмоциональному, ментальному и позитивному интеллекту.', 
        key: '3',
        img: 'https://img.freepik.com/free-vector/flat-illustration-of-person-being-shamed-or-blamed_23-2149329989.jpg?w=996&t=st=1716556914~exp=1716557514~hmac=8382b4ef0c565b631fb368be23336e260379d55feebcb265d3325560e012015b'},

       
        {name: 'Что такое майндфулнес',
         anons: 'Или почему вы никогда не станете осознанным', 
         full: 'Развивайте осознанность, и только так вы сможете наконец-то стать счастливым! в этом нас уверяют продавцы бесконечных курсов и практик в интернете, по окончании которых должно произойти чудо. Но почему вообще нужна эта способность? На какие сферы жизни она влияет? И точно ли это путь к счастью? Разбираемся в феномене осознанности и делимся тремя простыми упражнениями по ее развитию. В психологии осознанность определяется как постоянное отслеживание текущих состояний. Это осуществляется благодаря такой способности, как интроспекция, — наблюдение за протекающими внутри психическими процессами. Главный вопрос, который стоит себе задать, — «Как я себя ощущаю сейчас?». При этом чувства не оцениваются как «плохие» или «хорошие» — принимается сам факт их переживания.Чилийский гештальт-терапевт, доктор медицины Клаудио Наранхо составил триаду основополагающих принципов гештальт-терапии: «Актуальность — осознанность — ответственность». Последнее понималось как способность ответить, реагировать, проявлять эмоции. А для этого нужно уметь анализировать ситуацию и осознавать, как вы в ней проявляетесь.За «базовую осознанность», способность интерпретировать ощущения отвечает ствол головного мозга. Психолог Кэррол Изард подчеркивает, что подобные формы первичного сознания состоят из способности осознавать присутствие кого-либо. Однако они не включают возможность говорить о переживаемом опыте. То есть навык осознанности необходимо развивать. Например, дети не способны осознавать свои чувства и описывать их.Необходимость в развитии этого умения возрастает, ведь для верного принятия решений нужно останавливаться и подключать медленное мышление. Однако бесконечный информационный поток осложняет этот процесс. Кроме того, современный человек сталкивается с алекситимией. Этот термин был введен в 70-х годах XX века и означает затруднение в вербализации своих эмоций. То есть некоторые люди не способны понять и словесно выражать то, что они чувствуют. Развитию осознанности мешает и неумение концентрироваться. Проводилось немало исследований о том, что современный человек не способен удерживать внимание долгое время. Тем более на состоянии «здесь и сейчас».Итак, осознанность — это способность отслеживать свои ощущения в текущем моменте. Она подразумевает свободу от автоматизма и беспорядочного поведения, считает Ассоциация исследователей осознанности (AMRA). На самом деле, для развития этого умения нужна смелость, ведь вы принимаете реальность такой, какая она есть.Один из распространенных способов развития осознанности — медитации. Они заимствованы из учения буддизма. Благодаря им человек учится наблюдать за собой, останавливать поток мыслей и прислушиваться к ощущениям в теле.', 
         key: '4', 
         img: 'https://img.freepik.com/free-vector/customer-behavior-concept-illustration_114360-7395.jpg?w=740&t=st=1716556974~exp=1716557574~hmac=53db45ea4174021cfd6787cb8add5b60e95f1767c9129f7a76c15d8bc857ea97'},
         
        
         {name: 'Что такое токсичная продуктивность и как от нее избавиться',
         anons: 'Как не перегореть на учебе?', 
         full: 'Постоянные переработки, чувство вины за отдых, постоянное недовольство собой — это лишь часть признаков, которые указывают на токсичную продуктивность. Из-за нее портится как карьера, так и личная жизнь. Рассказываем, как избавиться от такого разрушительного поведения.', 
         key: '5', 
         img: 'https://avatars.dzeninfra.ru/get-zen_doc/4080861/pub_636a8e97c318750a901394b2_636a8ee5e971b100faa6c9a9/scale_1200'},
         
         {name: 'Моя вторая память',
         anons: '5 необычных техник конспектирования', 
         full: 'В школе и институте редко учат искусству конспектирования, хотя именно это умение может оказаться одним из ключевых навыков, обеспечивающих успех в учебе. Как структурирует свои пометки Билл Гейтс, что такое метод Корнелла и кто больше всех пропагандировал mind-mapping — «Теории и практики» рассказывают о пяти полезных техниках конспектирования для тех, кто по-прежнему предпочитает бумагу и ручку.Метод КорнеллаЭтот метод конспектирования очень популярен в Америке, и в некоторых учебных заведениях его даже пытаются сделать обязательным. Он стимулирует студентов перечитывать свои конспекты, дополнять их и перерабатывать. Но, если студент не возвращается к своим записям, какой-то особой пользы от подобного оформления материала, в общем-то, нет.Подробнее о методе Корнелла можно почитать в книге его создателя Вальтера Паука «How to Study in College» или посмотреть вот этот видеотьюториал.Метод Билла ГеВ 2003 году молодой предприниматель Роб Ховард познакомился с Биллом Гейтсом и, явно находясь под большим впечатлением от этой встречи, написал о ней пост в свой блог. Пожалуй, больше всего читателей Ховарда поразило то, что во время переговоров Билл Гейтс (на минуточку, один из самых обеспеченных людей в мире) делал пометки сам, от руки, а не в ноутбуке. Ховард немного описывает и метод, которым Гейтс структурировал материал. Лист его блокнота был размечен на квадраты, в каждом из которых он записывал связанный определенной тематикой блок. Например, один из квадратов в нижней части листа был отведен на вопросы, которые появлялись у Гейтса по ходу переговоров. Некоторые блогеры считают, что квадраты Гейтса — это переработанный традиционный метод Корнелла, и призывают читателей подогнать эту систему под собственные нужды, а не просто стремиться скопировать стиль создателя «Майкрософта».Метод ментальных карт (mind-mappMind-mapping — это популярная техника записи, по правилам которой начинать нужно всегда в середине листа. В кружочке или в рамочке прямо по центру страницы нужно указать главное понятие, о котором пойдет речь в конспекте. И потом с помощью ответвлений в разные стороны записывать в новых кружочках ключевые слова и идеи, с ним связанные. Если вы собираетесь использовать этот метод, лучше запастись ручками как минимум трех разных цветов, чтобы делать более заметными разные ответвления. Главным популяризатором этой техники был Тони Бьюзан — английский психолог и телеведущий, который активно использовал метод ментальных карт в середине 1970-х годов в своей телепередаче «Use Your Brain». Сегодня к этому методу часто прибегают любители мозговых штурмов.', 
         key: '6', 
         img: 'https://avatars.dzeninfra.ru/get-zen_doc/1947084/pub_63c680a1f14b0c245ffbfb25_63c680b314f0c11f09c28a51/scale_2400'}


    ])

const loadScene = () => {
    navigation.navigate('ToDoList');
}

const [modalWindow, setModalWindow] = useState(false);

const addArticle = (article) => {
    setNews((list) => {
        article.key = Math.random().toString();
        return[
            article,
            ...list
        ]
    })
    setModalWindow(false)
}

  return(
    <View style = {gStyle.main}>
        <Modal visible = {modalWindow}>
            <View style = {styles.main}>
   <ImageBackground source={require('../assets/backimg1.jpg' )} style={styles.background1}/>

            <Ionicons name="close-circle-sharp" size={35} color="#a3b18a" style = {styles.iconClose} onPress={() => setModalWindow(false)} />
            <Text style = {styles.title2}>Форма добавления статьи</Text>
           <FormList addArticle = {addArticle}/>
            </View>
        </Modal>

        <View style={styles.iconContainer}>
        <Text style = {styles.titleIcon}>Добавить статью: </Text>
        <Ionicons name="add-circle" size={30} color="#a3b18a" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
        <Text style = {styles.titleIcon}>Задачи: </Text>
        <Ionicons name="square-sharp" size={30} color="#a3b18a" style={styles.iconToDo} onPress={loadScene} />
        </View>

        <Text style = {[styles.title, styles.header]}>Саморазвитие</Text>
        <FlatList 
        data = {news}
        renderItem={({item})=> (
            <TouchableOpacity style = {styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                <Image style = {styles.image}source = {{
                    uri: item.img
                }}/>
                <Text style = {gStyle.title}>{item.name}</Text>
                <Text style = {styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
        )
    }   
        />
    </View>
  )
}

const styles = StyleSheet.create({
    background1: {
        flex: 1,
        resizeMode: 'cover',
        width: '110%',
        height: '90%',
        right: 20,
        bottom: 30,
        justifyContent: 'center',
        
      },
      background2: {
        flex: 1,
        borderRadius: 40,
        resizeMode: 'cover',
        width: '110%',
        height: '130%',
        right: 20,
        justifyContent: 'center',
        
      },
    main:{
        height: '130%',
        flex:1,
        padding:20,
        
        backgroundColor: '#edede9',
        paddingTop:30,
        justifyContent: 'center'
        
    },
    titleIcon:{
        fontFamily: 'p-bold',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#403d39',
        bottom: 5,
        marginRight: 15,
        right: 10
    },
    iconContainer: {
        flexDirection: 'row', // Расположение элементов в строку
        justifyContent: 'space-between', // Распределение пространства между элементами
        alignItems: 'center', // Выравнивание элементов по центру
        marginVertical: 2, // Вертикальный отступ
        paddingHorizontal: 30 // Горизонтальный отступ
      },
    iconToDo:{
        textAlign: 'center',
        marginBottom:10,
        right:20
    },
    iconAdd:{
        textAlign: 'center',
        marginBottom:10,
        right:20

    },
    iconClose:{
        left: 3,
        textAlign: 'center',
        //marginBottom:30,
        bottom: 20,
    },
    image:{
        width: '100%',
        height: 200,
    },
    header:{
        marginBottom:10,
        
    },
    item:{
        width: '100%',
        marginBottom: 20,

    },
    title:{
        fontFamily: 'p-bold',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#344e41'
    },
    title2:{
        fontFamily: 'p-bold',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#8a817c'
    },
    anons:{
        fontFamily: 'p-bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop:10,
        fontWeight: 'bold',
        color: '#5c6b64'
    }
    }
)


