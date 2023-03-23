require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) {FactoryBot.create(:user)}

  describe "with invalid attributes" do
    context "a nil name" do
      it "should be invalid" do 
        user.name = nil
        expect(user).to_not be_valid
      end
    end
    context "a name shorter than 3 characters" do
      it "should be invalid" do 
        user.name = "Mo"
        expect(user).to_not be_valid
      end
    end

    context "a nil email" do
      it "should be invalid" do 
        user.email = nil
        expect(user).to_not be_valid
      end
    end

    context "a nil password" do
      it "should be invalid" do 
        user.password = nil
        expect(user).to_not be_valid
      end
    end
    context "a password shorter than 5 characters" do
      it "should be invalid" do 
        user.password = "1234"
        expect(user).to_not be_valid
      end
    end
    
  end
  

  context "with valid attributes" do
    it "should be valid" do 
      expect(user).to be_valid
    end
  end

end
