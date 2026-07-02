import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Scenario = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  tag: string;
  payoff: string;
  bother: string;
};

const scenarios: Scenario[] = [
  {
    id: "hotel",
    title: "包下海边酒店顶层",
    subtitle: "醒来先看海，再决定今天去哪花钱。",
    price: 1288000,
    tag: "高端酒店",
    payoff: "酒店经理把早餐菜单改成了你的名字。",
    bother: "管家问你：今晚要不要把月光也打包带走？",
  },
  {
    id: "car",
    title: "买一台只开周末的超跑",
    subtitle: "不是为了赶路，是为了让风也知道你来了。",
    price: 4680000,
    tag: "豪车",
    payoff: "车库系统自动给它留了 C 位。",
    bother: "现在的问题是：红色太张扬，银色又太低调。",
  },
  {
    id: "jet",
    title: "私人飞机去吃早餐",
    subtitle: "目的地不重要，重要的是早餐要在云上决定。",
    price: 2860000,
    tag: "旅行",
    payoff: "机长问你返航去哪，你说看心情。",
    bother: "机场贵宾厅把你误认为新老板。",
  },
  {
    id: "villa",
    title: "买下山顶泳池别墅",
    subtitle: "从今天起，晚霞也是你的固定资产。",
    price: 98000000,
    tag: "豪宅",
    payoff: "导航软件开始把这里标成你的名字。",
    bother: "每天从卧室走到餐厅都需要补充体力。",
  },
  {
    id: "dinner",
    title: "请朋友吃一顿离谱晚餐",
    subtitle: "账单很长，快乐更长。",
    price: 326000,
    tag: "高端餐厅",
    payoff: "主厨出来问：下次菜单要不要以你命名？",
    bother: "朋友开始认真讨论要不要认你当老板。",
  },
];

const identities = [
  "临时退休的神秘富豪",
  "刚继承海岛的普通人",
  "现金流过于健康的人",
  "不小心把梦想提前兑现的人",
  "人生余额突然爆表的人",
];

const openers = [
  "今天不适合省钱。",
  "余额不是问题，选择才是。",
  "先别问值不值，问就是开心。",
  "消费不是目的，情绪到位才是。",
];

const formatMoney = (amount: number) =>
  `¥${amount.toLocaleString("zh-CN", { maximumFractionDigits: 0 })}`;

const pick = <T,>(items: T[], fallback: T) =>
  items[Math.floor(Math.random() * items.length)] ?? fallback;

const defaultIdentity = identities[0] ?? "临时退休的神秘富豪";
const defaultScenario = scenarios[0] ?? {
  id: "hotel",
  title: "包下海边酒店顶层",
  subtitle: "醒来先看海，再决定今天去哪花钱。",
  price: 1288000,
  tag: "高端酒店",
  payoff: "酒店经理把早餐菜单改成了你的名字。",
  bother: "管家问你：今晚要不要把月光也打包带走？",
};

export default function App() {
  const [netWorth, setNetWorth] = useState(888888888);
  const [cash, setCash] = useState(52013140);
  const [identity, setIdentity] = useState(defaultIdentity);
  const [wish, setWish] = useState("等我有钱了，我要先把生活过成周末。");
  const [lastScenario, setLastScenario] = useState<Scenario>(defaultScenario);
  const [spent, setSpent] = useState(1288000);
  const dailyLine = useMemo(() => pick(openers, openers[0] ?? "今天不适合省钱。"), [netWorth, spent]);

  const refreshIdentity = () => {
    const worth = Math.floor(80_000_000 + Math.random() * 9_900_000_000);
    const availableCash = Math.floor(8_000_000 + Math.random() * 580_000_000);
    setNetWorth(worth);
    setCash(availableCash);
    setIdentity(pick(identities, defaultIdentity));
  };

  const spend = (scenario: Scenario) => {
    setLastScenario(scenario);
    setSpent((value) => value + scenario.price);
    setCash((value) => Math.max(value - scenario.price, 0));
  };

  const shareText = [
    "等我有钱了",
    `今日身份：${identity}`,
    `刚刚消费：${lastScenario.title}`,
    `花掉：${formatMoney(lastScenario.price)}`,
    `富人烦恼：${lastScenario.bother}`,
    "所有资产与消费均为虚拟娱乐模拟。",
  ].join("\n");

  const share = async () => {
    try {
      await Share.share({ message: shareText });
    } catch {
      // Web preview may not support native share.
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.kicker}>虚拟富豪人生模拟器</Text>
            <Text style={styles.title}>等我有钱了</Text>
          </View>
          <Pressable accessibilityLabel="重新生成身份" style={styles.iconButton} onPress={refreshIdentity}>
            <MaterialCommunityIcons name="dice-5" color="#1C1A17" size={22} />
          </Pressable>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroLine}>{dailyLine}</Text>
          <Text style={styles.identity}>{identity}</Text>
          <View style={styles.moneyRow}>
            <View style={styles.moneyBlock}>
              <Text style={styles.moneyLabel}>今日身价</Text>
              <Text style={styles.moneyValue}>{formatMoney(netWorth)}</Text>
            </View>
            <View style={styles.moneyBlock}>
              <Text style={styles.moneyLabel}>可用现金</Text>
              <Text style={styles.moneyValue}>{formatMoney(cash)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.blackCard}>
          <View style={styles.cardTop}>
            <MaterialCommunityIcons name="credit-card-outline" color="#F8E4B6" size={24} />
            <Text style={styles.cardBrand}>DREAM BLACK</Text>
          </View>
          <Text style={styles.cardNumber}>8888 2026 DREAM RICH</Text>
          <View style={styles.cardBottom}>
            <Text style={styles.cardName}>仅供娱乐模拟</Text>
            <Text style={styles.cardLimit}>无限想象额度</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="star-four-points-outline" color="#A24C2A" size={20} />
            <Text style={styles.sectionTitle}>我的有钱梦</Text>
          </View>
          <TextInput
            multiline
            value={wish}
            onChangeText={setWish}
            placeholder="等我有钱了，我要..."
            placeholderTextColor="#9B8D7F"
            style={styles.wishInput}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="cash-multiple" color="#A24C2A" size={20} />
            <Text style={styles.sectionTitle}>今天先花一笔</Text>
          </View>
          {scenarios.map((scenario) => (
            <Pressable key={scenario.id} style={styles.scenario} onPress={() => spend(scenario)}>
              <View style={styles.scenarioIcon}>
                {scenario.id === "jet" ? (
                  <MaterialCommunityIcons name="airplane" color="#1C1A17" size={20} />
                ) : (
                  <MaterialCommunityIcons name="currency-usd" color="#1C1A17" size={20} />
                )}
              </View>
              <View style={styles.scenarioCopy}>
                <View style={styles.scenarioMeta}>
                  <Text style={styles.tag}>{scenario.tag}</Text>
                  <Text style={styles.price}>{formatMoney(scenario.price)}</Text>
                </View>
                <Text style={styles.scenarioTitle}>{scenario.title}</Text>
                <Text style={styles.scenarioSubtitle}>{scenario.subtitle}</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" color="#B38D62" size={20} />
            </Pressable>
          ))}
        </View>

        <View style={styles.result}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="trophy-outline" color="#F8E4B6" size={20} />
            <Text style={[styles.sectionTitle, styles.resultTitle]}>刚刚发生</Text>
          </View>
          <Text style={styles.resultMain}>{lastScenario.payoff}</Text>
          <Text style={styles.resultSub}>富人烦恼：{lastScenario.bother}</Text>
          <Text style={styles.totalSpent}>今日累计虚拟消费 {formatMoney(spent)}</Text>
          <Pressable style={styles.shareButton} onPress={share}>
            <Text style={styles.shareButtonText}>生成分享文案</Text>
          </Pressable>
        </View>

        <Text style={styles.disclaimer}>
          本应用仅提供虚拟娱乐模拟。所有资产、身份、账单和消费记录均不代表真实财富、金融服务、贷款额度或投资建议。
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  page: {
    gap: 18,
    padding: 20,
    paddingBottom: 34,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 56,
  },
  kicker: {
    color: "#7C6D60",
    fontSize: 13,
  },
  title: {
    color: "#1C1A17",
    fontSize: 34,
    fontWeight: "900",
    marginTop: 2,
  },
  iconButton: {
    alignItems: "center",
    backgroundColor: "#F4DEC5",
    borderColor: "#E5C9AA",
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  hero: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EAD5BC",
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  heroLine: {
    color: "#A24C2A",
    fontSize: 15,
    fontWeight: "700",
  },
  identity: {
    color: "#1C1A17",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 31,
  },
  moneyRow: {
    flexDirection: "row",
    gap: 10,
  },
  moneyBlock: {
    backgroundColor: "#FFF4E6",
    borderRadius: 8,
    flex: 1,
    padding: 12,
  },
  moneyLabel: {
    color: "#7C6D60",
    fontSize: 12,
  },
  moneyValue: {
    color: "#1C1A17",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 4,
  },
  blackCard: {
    backgroundColor: "#1C1A17",
    borderRadius: 8,
    gap: 22,
    minHeight: 180,
    padding: 20,
  },
  cardTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBrand: {
    color: "#F8E4B6",
    fontSize: 13,
    fontWeight: "800",
  },
  cardNumber: {
    color: "#FFF8EF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0,
    marginTop: 12,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardName: {
    color: "#D8C6A8",
    fontSize: 12,
  },
  cardLimit: {
    color: "#F8E4B6",
    fontSize: 12,
    fontWeight: "800",
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  sectionTitle: {
    color: "#1C1A17",
    fontSize: 18,
    fontWeight: "900",
  },
  wishInput: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EAD5BC",
    borderRadius: 8,
    borderWidth: 1,
    color: "#1C1A17",
    fontSize: 16,
    lineHeight: 23,
    minHeight: 92,
    padding: 14,
    textAlignVertical: "top",
  },
  scenario: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#EAD5BC",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 106,
    padding: 12,
  },
  scenarioIcon: {
    alignItems: "center",
    backgroundColor: "#F4DEC5",
    borderRadius: 8,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
  scenarioCopy: {
    flex: 1,
    gap: 4,
  },
  scenarioMeta: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tag: {
    color: "#A24C2A",
    fontSize: 12,
    fontWeight: "800",
  },
  price: {
    color: "#7C6D60",
    fontSize: 12,
    fontWeight: "700",
  },
  scenarioTitle: {
    color: "#1C1A17",
    fontSize: 16,
    fontWeight: "900",
  },
  scenarioSubtitle: {
    color: "#7C6D60",
    fontSize: 13,
    lineHeight: 18,
  },
  result: {
    backgroundColor: "#A24C2A",
    borderRadius: 8,
    gap: 12,
    padding: 18,
  },
  resultTitle: {
    color: "#FFF8EF",
  },
  resultMain: {
    color: "#FFF8EF",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 30,
  },
  resultSub: {
    color: "#F8E4B6",
    fontSize: 15,
    lineHeight: 22,
  },
  totalSpent: {
    color: "#FFF8EF",
    fontSize: 14,
    fontWeight: "800",
  },
  shareButton: {
    alignItems: "center",
    backgroundColor: "#FFF8EF",
    borderRadius: 8,
    minHeight: 46,
    justifyContent: "center",
  },
  shareButtonText: {
    color: "#A24C2A",
    fontSize: 15,
    fontWeight: "900",
  },
  disclaimer: {
    color: "#7C6D60",
    fontSize: 12,
    lineHeight: 18,
  },
});
