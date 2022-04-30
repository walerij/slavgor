function get_totem(year, param)
{
    etalon=1976
    ost=0
    totems=[
        "Темный Сох (Лось)",
        "Жалящий Шершень (Оса)",
        "Притаившийся Лют (Волк)",
        "Огненная Векша (Белка)",
        "Жемчужная Щука",
        "Бородатая Жаба",
        "Дикий Вепрь (Кабан) ",
        "Белый Филин",
        "Шипящий Уж ",
        "Крадущийся Лис",
        "Свернувшийся Еж",
        "Парящий Орел",
        "Прядущий Мизгирь (Паук) ",
        "Кричащий Петух",
        "Златорогий Тур (Бык)",
        "Огнегривый Конь"
    ]

    totem_desc=[
        'Темный Сох — это прирожденный лидер, первооткрыватель, он всегда ведет за собой других, возглавляет коллективы, занимает лидирующие должности. Лось — гордое и целеустремленное животное, которое никогда не останавливается на достигнутом. Часто людей, рожденных под знаком этого тотема, не понимают из-за слишком прогрессивных взглядов — идеи Лосей опережают свое время.',
        'Шершни очень трудолюбивы, активны и чересчур суетливы. А еще они обожают пошуметь — да-да, на вечеринках не заметить представителей этого тотема просто нереально :) Шершни могут больно ужалить, так что дорогу им переходить не советуем — лучше не испытывать на себе их остроту.',
        'Волки — свободолюбивые, грациозные и опасные хищники, которым, однако, не чужды чувства доброты и справедливости. Волки не способны долго терпеть — в случае острой ситуации покажут свои клыки. Рожденные под этим тотемом часто любят быть в одиночестве, но если уж попадают в компанию — незамеченными не остаются.',
        'Чтобы лучше понять представителей этого тотема, стоит лишь вспомнить Белку из мульта «Ледниковый период». Ради своего «орешка» (а им может быть любая цель) это животное готово почти на все. Ловкие, целеустремленные, умные и сообразительные, Белки мгновенно вникают в ситуацию, находя даже из тупикового случая благоприятный выход.',
        'Щуки очень часто фигурируют в русско-народных сказках, часто они глаголят истину и мудрость. В жизни точно так же — рожденные под тотемом Щуки — высокоморальные люди, которые стараются жить по всем канонам, делиться своей праведностью с другими. А еще Щуки могут контролировать свои эмоции или, как минимум, не давать им взять верх над ситуацией. Разум, а не чувства — вот девиз Жемчужных Щук.',
        'Жабы любят сидеть в своем «болоте», дома, при этом за жилищем всегда следят с особой тщательностью. Среди Жаб почти нет нерях, они хозяйственны и аккуратны. А еще общительны — как ни странно, в «болото» Бородатых Жаб просто обожают приходить гости.',
        'Люди-Вепри — бесстрашные, напористые и целеустремленные. Они готовы бороться за то, что им дорого. Но если что-то им неинтересно — отступят, отпустят, забудут и легко отдадут. Вепрям нужен толчок, чтобы те начали активничать. Но если уж разогнать этих Кабанчиков, то остановить их будет почти невозможно :)',
        'Если твой тотем — Филин, значит у тебя 100% развита интуиция или даже экстрасенсорные способности! Часто люди, рожденные в год этого символа, часто ведут замкнутый образ жизни и доверяют только избранному кругу людей.',
        'Ужи могут выкручиваться их самых сложных и нелепых ситуаций. Они часто производят впечатление опасных людей, но на деле они добрые и приятные. Люди, рожденные в год этого тотема, способны гармонично влиять на свое окружение.',
        'Лучшие интриганы — это хитроумные Лисы. Они умело добывают информацию, лукавят и подтасовывают факты, а еще и приврать могут для своей выгоды. Крадущиеся Лисы умеют добиваться своих целей, так что если они что-то захотели, лучше не вставать у них на пути :)',
        'Ежики — лучшие друзья, верные партнеры и вообще милые люди. Да, у них есть колючки, и они могут свернуться в них, когда мир вокруг слишком жестокий и темный. Люди, рожденные под этим тотемом, особенно ранимы и чувствительны.',
        'Орлы — свободолюбивые, гордые люди, обожающие парить и быть над ситуацией. Они благородны, готовы прийти на помощь нуждающемуся и вынести справедливый приговор провинившемуся. В дружбе и любви Орлы верны и честны.',
        'Мизгирь — хранитель традиций и домашнего очага, надежная опора семьи и общества. И все бы супер, да только попадание в его сети не сулит ничего хорошо. Пауки часто являются теми, кто собирает вместе людей из разных слоев — они умеют объединять и возглавлять.',
        'Петухи обожают быть в центре внимания, покарать окружающих своей яркостью. Отдать для кого-то свое место лидера для них — наитруднейшая задача, будут биться за свое право быть первым! А еще тотем Петуха наделяет человека амбициями, резкостью и бесстрашием.',
        'Бык — добродушное и спокойное животное… до тех пор, пока его не взбесить. На пути у разъяренного Тура лучше не вставать — сотрет в порошок в порыве гнева. Хорошо, что вывести из себя Быков не так уж просто: в повседневной жизни это вполне уравновешенные и справедливые люди.',
        'Активный, отважный, обожающий простор и путешествия Конь обожает приключение и ненавидит сидеть на месте. Эти люди трудолюбивы и выносливы, так что из них часто получаются отличные спортсмены. А своей гривой они способны покорить кого угодно :)'
        
    ]

    ost = Math.abs((year-etalon)%16)
    if (param=='desc')
    {
        return totem_desc[ost]
    }
    else
    {
        return totems[ost] 
    }
}

function init(year)
{
    document.getElementById('resyear').innerHTML=get_totem(year)
    document.getElementById('resdesc').innerHTML=get_totem(year,"desc")
}

//alert(get_totem(2002))