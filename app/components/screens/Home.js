import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useNews from '../../hooks/useNews';
import BreakingNews from '../BreakingNews';
import Screen from '../common/Screen';
import EntertainmentNews from '../EntertainmentNews';
import FeaturedNews from '../FeaturedNews';
import NewsList from '../lists/NewsList';
import PoliticalNews from '../PoliticalNews';
import SearchBar from '../SearchBar';
import TechNews from '../TechNews';
import ActivityIndicator from '../common/ActivityIndicator';

const Home = () => {
    const [featuredNews, politicalNews, entertainmentNews, techNews, breakingNews, loading] = useNews();
    const [isSearchFocused, setSearchFocused] = useState(false);

  return (
    <>
    <ActivityIndicator visible={loading} />
    <Screen isSearchFocused>
      <SearchBar setSearchFocused={setSearchFocused} />
      <FeaturedNews item={featuredNews} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
      {/* <NewsList /> */}
    </Screen>
    </>
  );
}

export default Home

const styles = StyleSheet.create({})
