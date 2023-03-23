require 'rails_helper'

RSpec.describe Friend, type: :model do
  let(:user) {FactoryBot.create(:user)}
  let!(:friend) {FactoryBot.create(:friend,user: user)}

  describe "with invalid attributes" do
    context "a nil name" do
      it "should be invalid" do 
        friend.name = nil
        expect(friend).to_not be_valid
      end
    end
    context "a name shorter than 3 characters" do
      it "should be invalid" do 
        friend.name = "Mo"
        expect(friend).to_not be_valid
      end
    end

    context "without user" do
      it "should be invalid" do 
        friend.user = nil
        expect(friend).to_not be_valid
      end
    end
  end

  context "with valid attributes" do
    it "should be valid" do 
      expect(friend).to be_valid
    end
  end
end
