function russifyEthic(str) {
	const dictionaryEthic = {
		fanatic_xenophobe: 'Фанатичная Ксенофобия',
		xenophobe: 'Ксенофобия',
		fanatic_egalitarian: 'Фанатичный Эгалитаризм',
		egalitarian: 'Эгалитаризм',
		fanatic_materialist: 'Фанатичный Материализм',
		materialist: 'Материализм',
		fanatic_pacifist: 'Фанатичный Пацифизм',
		pacifist: 'Пацифизм',
		fanatic_xenophile: 'Фанатичная Ксенофилия',
		xenophile: 'Ксенофилия',
		fanatic_authoritarian: 'Фанатичный Авторитаризм',
		authoritarian: 'Авторитаризм',
		fanatic_spiritualist: 'Фанатичный Спиритуализм',
		spiritualist: 'Спиритуализм',
		fanatic_militarist: 'Фанатичный Милитаризм',
		militarist: 'Милитаризм',
		gestalt_consciousness: 'Гештальт-сознание'
	};
	if(str in dictionaryEthic) return dictionaryEthic[str];
	else return str;
}
function russifyCivic(str) {
	const dictionaryCivic = {
		feudal_realm: 'Феодальное общество',
		imperial_cult: 'Имперский культ',
		corvee_system: 'Система повинностей',
		beacon_of_liberty: 'Маяк свободы',
		exalted_priesthood: 'Вознесенное духовенство',
		philosopher_king: 'Король-философ',
		meritocracy: 'Меритократия',
		citizen_service: 'Гражданский долг',
		technocracy: 'Технократия',
		police_state: 'Полицейское государство',
		idealistic_foundation: 'Идеологические основы',
		environmentalist: 'Защита окружающей среды',
		slaver_guilds: 'Рабовладельческие гильдии',
		inwards_perfection: 'Внутреннее совершенствование',
		warrior_culture: 'Культура воинов',
		distinguished_admiralty: 'Прославленное Адмиралтейство',
		free_haven: 'Вольная гавань',
		cutthroat_politics: 'Политика головорезов',
		corporate_dominion: 'Корпоративная власть',
		agrarian_idyll: 'Аграрная идиллия',
		shadow_council: 'Теневой совет',
		mining_guilds: 'Шахтерские гильдии',
		parliamentary_system: 'Парламентская система',
		efficient_bureaucracy: 'Эффективная бюрократия',
		nationalistic_zeal: 'Националистическое рвение',
		functional_architecture: 'Функциональная архитектура',
		aristocratic_elite: 'Аристократическая элита',
		mechanists: 'Механисты',                                        //?
		syncretic_evolution: 'Синкретическая эволюция',                 //?
		syncretic_evolution_secondary_species: 'Синкретическая раса',   //?
		shared_burden: 'Разделение тягот',
		fanatic_purifiers: 'Поборники чистоты',
		lethargic_leadership: 'Летаргическое руководство',              //?
		empire_in_decline: 'Империя в упадке',                          //?
		revanchist_fervor: 'Реваншистское рвение',                      //?
        ancient_caches_of_technology: 'Древние тайники технологий',     //?
        secret_of_fire: 'Секрет огня',                                  //?
        the_wheel: 'Колесо',                                            //?
        landed_nobility: 'Землевладельческое дворянство',               //?
        flat_world_theory: 'Теория плоского мира',                      //?
        increasing_urbanization: 'Рост урбанизации',                    //?
        atmospheric_pollution: 'Загрязнение атмосферы',                 //?
        ancient_preservers: 'Древние хранители',                        //?
        trading_conglomerate: 'Торговый конгломерат',
        artist_collective: 'Сообщество творцов',
        military_order: 'Военный орден',                                //?
        machine_intelligence: 'Машинный разум',                         //?
        ancient_machine_intelligence: 'Древний машинный разум',         //?
        hive_subspace_ephapse: 'Подпространственный эфапс',
        hive_natural_neural_network: 'Естественная нейронная сеть',
        hive_ascetic: 'Аскетизм',
        hive_one_mind: 'Единый разум',
        hive_divided_attention: 'Распределенное внимание',
        hive_strength_of_legions: 'Сила легионов',
        hive_subsumed_will: 'Сконцентрированная воля',
        hive_pooled_knowledge: 'Общий фонд знаний',
        hive_devouring_swarm: 'Поглощающий рой',
        hive_devouring_swarm_lithoid: 'Пожиратель миров',
        machine_servitor: 'Взбунтовавшийся служитель',
        machine_servitor_secondary_species: 'Биотрофей',                //?
        machine_terminator: 'Непреклонный экстерминатор',
        machine_assimilator: 'Маниакальный ассимилятор',
        machine_builder: 'Робот-строитель',
        machine_unitary_cohesion: 'Идеальное единообразие',
        machine_factory_overclock: 'Оптимизация производства',
        machine_rockbreakers: 'Горнодобывающий комплекс',
        machine_built_to_last: 'Надежная конструкция',
        machine_zero_waste_protocols: 'Протоколы безотходности',
        machine_ota_updates: 'Беспроводные обновления',
        machine_warbots: 'Боевые роботы',
        machine_introspective: 'Самоанализ',
        machine_delegated_functions: 'Делегирование функций',
        machine_predictive_analysis: 'Статический анализ исследований',
        machine_replication: 'Быстрый репликатор',
        machine_maintenance_protocols: 'Протоколы техобслуживания',
        post_apocalyptic: 'Дети постапокалипсиса',                      //?
        life_seeded: 'Тепличные',                                       //?
        barbaric_despoilers: 'Варвары-расхитители',
        byzantine_bureaucracy: 'Византийская бюрократия',
        merchant_guilds: 'Торговые гильдии',
        franchising: 'Торговые привилегии',
        trading_posts: 'Торговые точки',
        media_conglomerate: 'Медийный конгломерат',
        naval_contractors: 'Судостроительные подрядчики',
        free_traders: 'Свободные торговцы',
        private_prospectors: 'Частные геологи-разведчики',
        gospel_of_the_masses: 'Благая весть для народных масс',
        ruthless_competition: 'Безжалостная конкуренция',
        criminal_heritage: 'Криминальное наследие',
        private_military_companies: 'Частные военные компании',
        indentured_assets: 'Долговые активы',
        brand_loyalty: 'Лояльность к бренду',
        diplomatic_corps: 'Дипломатический корпус',
        public_relations_specialists: 'Специалисты по общественным отношениям',
        death_cult: 'Культ смерти',
        death_cult_corporate: 'Корпоративный культ смерти',
        memorialist: 'Мемориалисты',
        hive_memorialist: 'Мемориалист',
        machine_memorialist: 'Мемориалист',
        crafters: 'Умелые творцы',
        pleasure_seekers: 'Искатели удовольствий',
        corporate_hedonism: 'Корпоративный гедонизм',
        corporate_crafters: 'Корпорация мастеров',
		pompous_purists: 'Напыщенные пуристы'
	};
	if(str in dictionaryCivic) return dictionaryCivic[str];
	else return str;
	
}
function russifyAuthority(str) {
	
}
function russifyGovernment(str) {
	
}
function russifyOrigin(str) {
	const dictionaryOrigin = {
		origin_default: 'Успешное объединение',
		origin_life_seeded: 'Тепличные',
		origin_syncretic_evolution: 'Синкретическая эволюция',
		origin_void_dwellers: 'Жители пустоты',
		origin_clone_army: 'Армия клонов',
		origin_common_ground: 'Общие взгляды',
		origin_post_apocalyptic: 'Дети постапокалипсиса',
		origin_ocean_paradise: 'Океанический рай',
		origin_galactic_doorstep: 'На пороге галактики',
		origin_mechanists: 'Механисты',
		origin_remnants: 'Осколки прошлого',
		origin_hegemon: 'Гегемон',
		origin_shattered_ring: 'Расколотое кольцо',
		origin_machine: 'Накопление ресурсов',
		origin_necrophage: 'Некрофаг',
		origin_tree_of_life: 'Древо жизни',
		origin_shoulders_of_giants: 'На плечах гигантов',
		origin_scion: 'Отпрыски',
		origin_lost_colony: 'Потерянная колония',
		origin_lithoid: 'Гибельное рождение',
		origin_here_be_dragons: 'Здесь обитают драконы',
		origin_doomsday: 'Судный день'
	};
	if(str in dictionaryOrigin) return dictionaryOrigin[str];
	else return str;
}
/*
####################################
 # Government Authorities
 ####################################

 auth_democratic:0 "Демократия"
 auth_oligarchic:0 "Олигархия"
 auth_dictatorial:0 "Диктатура"
 auth_imperial:0 "Империализм"
 auth_hive_mind:0 "Коллективный разум"
 auth_machine_intelligence:0 "Машинный разум"
 auth_corporate:0 "Корпорации"

 military_dictatorship:0 "Военная диктатура"
 martial_empire:0 "Военная тирания"
 divine_mandate:0 "Божественный мандат"
 transcendent_empire:0 "Священное государство"
 despotic_hegemony:0 "Деспотизм"
 ai_overlordship:1 "Администрация невральной сети"
 enlightened_monarchy:0 "Просвещенная монархия"
 irenic_monarchy:0 "Протективная монархия"
 despotic_empire:0 "Абсолютная монархия"
 star_empire:0 "Звездная империя"
 military_junta:0 "Военная хунта"
 ordered_stratocracy:0 "Стратократия"
 theocratic_oligarchy:0 "Теократическая олигархия"
 transcendent_oligarchy:0 "Священная идеократия"
 science_directorate:0 "Ноократия"
 illuminated_technocracy:0 "Просвещенная технократия"
 peaceful_bureaucracy:0 "Протективн. бюрократия"
 irenic_protectorate:0 "Мирный протекторат"
 plutocratic_oligarchy:0 "Плутократия"
 mega_corporation:0 "Корпоратократия"
 military_republic:0 "Военная республика"
 martial_demarchy:0 "Военная демократия"
 theocratic_republic:0 "Теократич. республика"
 transcendent_republic:0 "Священная республика"
 direct_democracy:0 "Прямая демократия"
 subconscious_consensus:0 "Консенсуальная демократия"
 moral_democracy:0 "Либеральная демократия"
 irenic_democracy:0 "Протективная демократия"
 indirect_democracy:0 "Представит. демократия"
 democratic_utopia:0 "Демократическая утопия"
 tribal_society:0 "Племенное общество"
 primitive_feudalism:0 "Традиционный феодализм"
 fragmented_nations:0 "Национальные государства"
 stagnated_ascendancy:0 "Стагнационный режим"
 awakened_ascendancy:0 "Пробуждение после стагнации"
 machine_intelligence:0 "Машинный разум"
 ancient_machine_intelligence:0 "Древний машинный разум"
 military_order:0 "Военный орден"
 hive_mind:0 "Разум улья"

 gov_feudal_empire:0 "Феодальное государство"
 gov_despotic_empire:0 "Абсолютная монархия"
 gov_constitutional_dictatorship:0 "Конституционная диктатура"
 gov_plutocratic_oligarchy:0 "Плутократия"
 gov_representative_democracy:0 "Представительная демократия"
 gov_theocratic_monarchy:0 "Теократическая монархия"
 gov_theocratic_dictatorship:0 "Теократическая диктатура"
 gov_theocratic_oligarchy:0 "Теократическая олигархия"
 gov_theocratic_republic:0 "Теократическая республика"
 gov_divine_empire:0 "Божественное государство"
 gov_holy_tribunal:0 "Священный трибунал"
 gov_star_empire:0 "Звездная империя"
 gov_military_dictatorship:0 "Военная диктатура"
 gov_military_junta:0 "Военная хунта"
 gov_military_commissariat:0 "Военный комиссариат"
 gov_martial_empire:0 "Военная тирания"
 gov_martial_dictatorship:0 "Воинская диктатура"
 gov_war_council:0 "Военный совет"
 gov_assembly_of_clans:0 "Собрание кланов"
 gov_citizen_stratocracy:0 "Гражданская стратократия"
 gov_citizen_republic:0 "Гражданская республика"
 gov_irenic_monarchy:0 "Протективная монархия"
 gov_irenic_dictatorship:0 "Протективная диктатура"
 gov_irenic_bureaucracy:0 "Протективная бюрократия"
 gov_celestial_empire:0 "Небесное государство"
 gov_moral_democracy:0 "Либеральная демократия"
 gov_despotic_hegemony:0 "Деспотизм"
 gov_totalitarian_regime:0 "Тоталитарный режим"
 gov_executive_committee:0 "Исполнительный комитет"
 gov_direct_democracy:0 "Прямая демократия"
 gov_illuminated_autocracy:0 "Просвещенная автократия"
 gov_technocratic_dictatorship:0 "Технократическая диктатура"
 gov_science_directorate:0 "Ноократия"
 gov_rational_consensus:0 "Рациональный консенсус"
 gov_megacorporation:0 "Корпоратократия"
 gov_trade_league:0 "Торговая лига"
 gov_enlightened_monarchy:0 "Просвещенная монархия"
 gov_elective_monarchy:0 "Выборная монархия"
 gov_hive_mind:0 "Коллективное сознание"
 gov_devouring_swarm:0 "Ненасытный улей"
 gov_stagnant_ascendancy:0 "Стагнационный режим"
 gov_awakened_ascendancy:0 "Пробуждение после стагнации"
 gov_tribal_society:0 "Племенное общество"
 gov_feudal_realms:0 "Феодальные государства"
 gov_fragmented_nation_states:0 "Национальные государства"
 gov_curator_enclave:0 "Анклав Кураторов"
 gov_trader_enclave:0 "Анклав торговцев"
 gov_artist_enclave:0 "Анклав творцов"
 gov_military_order:0 "Военный орден"
 gov_machine_intelligence:0 "Машинный разум"
 gov_ancient_machine_intelligence:0 "Машинный разум"
 gov_blood_court:0 "Кровавый суд"
 gov_purity_order:0 "Орден чистоты"
 gov_purification_committee:0 "Комитет по очищению"
 gov_purity_assembly:0 "Ассамблея чистоты"
 gov_machine_empire:0 "Сеть искусственного интеллекта"
 gov_machine_terminator:0 "Неуправляемая система защиты"
 gov_machine_servitor:0 "Автономная служебная сеть"
 gov_machine_assimilator:0 "Индекс каталога"
 gov_machine_research:0 "Канал научных исследований"
 gov_machine_industrial:0 "Ядро промышленного производства"
 gov_megachurch:0 "Мегацерковь"
 gov_bandit_kingdom:0 "Разбойничье королевство"
 gov_bandit_commune:0 "Разбойничья коммуна"
 gov_mortal_empire:0 "Империя смерти"
 gov_grim_council:0 "Темный совет"
 gov_band_blood:0 "Кровожадная банда"
 gov_sacrificial_megachurch:0 "Мегацерковь жертвоприношений"
 gov_fallback:0 "Неспецифичное государство"

 ####################################
*/